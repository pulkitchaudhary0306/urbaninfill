const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_FOLDERS = [
  path.join(__dirname, 'public', 'luxuryhomes'),
  path.join(__dirname, 'public', 'projects')
];

const MAX_SIZE_KB = 200;
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;
const ALLOWED_EXT = ['.avif', '.webp', '.jpg', '.jpeg', '.png'];

function walkDir(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of list) {
    const full = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      results.push(...walkDir(full));
    } else if (dirent.isFile()) {
      const ext = path.extname(dirent.name).toLowerCase();
      if (ALLOWED_EXT.includes(ext)) results.push(full);
    }
  }
  return results;
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const fileName = path.relative(__dirname, filePath);

  try {
    const stats = fs.statSync(filePath);
    const originalKB = (stats.size / 1024).toFixed(2);
    if (stats.size <= MAX_SIZE_BYTES) {
      console.log(`✓ ${fileName} already <= ${MAX_SIZE_KB}KB (${originalKB} KB)`);
      return;
    }

    const metadata = await sharp(filePath).metadata();
    let { width = null, height = null } = metadata;
    if (!width || !height) {
      // Fallback: read without resize
      width = metadata.width || 1600;
      height = metadata.height || 900;
    }

    let newWidth = width;
    let newHeight = height;
    const maxDim = 1600;
    if (width > maxDim || height > maxDim) {
      if (width >= height) {
        newWidth = maxDim;
        newHeight = Math.round((height / width) * maxDim);
      } else {
        newHeight = maxDim;
        newWidth = Math.round((width / height) * maxDim);
      }
    }

    let quality = 80;
    let buffer = null;
    let iterations = 0;

    const maxIterations = 25;
    do {
      let pipeline = sharp(filePath).resize(newWidth, newHeight, { fit: 'inside', withoutEnlargement: true });
      if (ext === '.avif') pipeline = pipeline.avif({ quality: quality, effort: 6 });
      else if (ext === '.webp') pipeline = pipeline.webp({ quality: quality, effort: 6 });
      else pipeline = pipeline.jpeg({ quality: quality, mozjpeg: true });

      buffer = await pipeline.toBuffer();

      if (buffer.length > MAX_SIZE_BYTES) {
        quality = Math.max(30, quality - 5);
        if (quality <= 35) {
          // shrink dimensions if quality is low
          newWidth = Math.round(newWidth * 0.85);
          newHeight = Math.round(newHeight * 0.85);
        }
      }
      iterations++;
    } while (buffer.length > MAX_SIZE_BYTES && newWidth > 400 && iterations < maxIterations);

    if (buffer.length > MAX_SIZE_BYTES) {
      console.warn(`⚠ ${fileName} could not be reduced below ${MAX_SIZE_KB}KB (final ${(buffer.length/1024).toFixed(2)} KB)`);
      // still write the best-effort buffer
    }

    // Write back to the same path (overwrite)
    fs.writeFileSync(filePath, buffer);

    const newKB = (buffer.length / 1024).toFixed(2);
    const reduction = ((1 - buffer.length / stats.size) * 100).toFixed(1);
    console.log(`✓ ${fileName} ${originalKB}KB → ${newKB}KB (${reduction}% reduction)`);

  } catch (err) {
    console.error(`✗ Error processing ${fileName}: ${err.message}`);
  }
}

async function main() {
  const allFiles = [];
  for (const folder of TARGET_FOLDERS) {
    const files = walkDir(folder);
    allFiles.push(...files);
  }

  if (allFiles.length === 0) {
    console.log('No images found in target folders.');
    return;
  }

  console.log(`Found ${allFiles.length} images to process...\n`);

  for (const f of allFiles) {
    // eslint-disable-next-line no-await-in-loop
    await compressImage(f);
  }

  console.log('\n✓ Done processing target folders.');
}

main();
