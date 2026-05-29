const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, 'public');
const MAX_SIZE_KB = 200;
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;
const ALLOWED_EXT = new Set(['.avif', '.webp', '.jpg', '.jpeg', '.png']);

function walkImages(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  for (const dirent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      files.push(...walkImages(full));
    } else if (dirent.isFile()) {
      if (ALLOWED_EXT.has(path.extname(dirent.name).toLowerCase())) {
        files.push(full);
      }
    }
  }
  return files;
}

function createPipeline(filePath, ext, width, height, quality) {
  const pipeline = sharp(filePath).resize(width, height, { fit: 'inside', withoutEnlargement: true });
  if (ext === '.avif') return pipeline.avif({ quality, effort: 8 });
  if (ext === '.webp') return pipeline.webp({ quality, effort: 8 });
  if (ext === '.png') return pipeline.png({ quality, compressionLevel: 9, adaptiveFiltering: true });
  return pipeline.jpeg({ quality, mozjpeg: true });
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const fileName = path.relative(__dirname, filePath);
  const originalStats = fs.statSync(filePath);
  const originalKB = (originalStats.size / 1024).toFixed(2);

  if (originalStats.size <= MAX_SIZE_BYTES) {
    console.log(`✓ ${fileName}: already <= ${MAX_SIZE_KB}KB (${originalKB} KB)`);
    return { processed: false, fileName, originalKB, newKB: originalKB };
  }

  const metadata = await sharp(filePath).metadata();
  let { width = 1600, height = 900 } = metadata;
  if (!width || !height) {
    width = 1600;
    height = 900;
  }

  const maxDimension = 1600;
  if (width > maxDimension || height > maxDimension) {
    if (width >= height) {
      height = Math.round((height / width) * maxDimension);
      width = maxDimension;
    } else {
      width = Math.round((width / height) * maxDimension);
      height = maxDimension;
    }
  }

  let quality = 85;
  let newWidth = width;
  let newHeight = height;
  let buffer = null;
  let attempts = 0;
  const minQuality = 20;

  do {
    const pipeline = createPipeline(filePath, ext, newWidth, newHeight, quality);
    buffer = await pipeline.toBuffer();

    if (buffer.length > MAX_SIZE_BYTES) {
      if (quality > minQuality) {
        quality = Math.max(minQuality, quality - 5);
      } else {
        newWidth = Math.max(200, Math.round(newWidth * 0.85));
        newHeight = Math.max(200, Math.round(newHeight * 0.85));
        // Reset quality slightly after reducing dimensions to give the next pass more room.
        quality = Math.max(minQuality, quality + 10);
      }
    }
    attempts += 1;
  } while (buffer.length > MAX_SIZE_BYTES && newWidth > 200 && attempts < 50);

  const tempPath = `${filePath}.tmp`;
  fs.writeFileSync(tempPath, buffer);
  fs.renameSync(tempPath, filePath);

  const newKB = (buffer.length / 1024).toFixed(2);
  const reduction = ((1 - buffer.length / originalStats.size) * 100).toFixed(1);
  if (buffer.length > MAX_SIZE_BYTES) {
    console.warn(`⚠ ${fileName}: final size ${newKB}KB still above ${MAX_SIZE_KB}KB after aggressive compression.`);
  } else {
    console.log(`✓ ${fileName}: ${originalKB}KB → ${newKB}KB (${reduction}% reduction)`);
  }
  return { processed: true, fileName, originalKB, newKB };
}

async function main() {
  const images = walkImages(ROOT);
  if (!images.length) {
    console.log('No images found in public/ to process.');
    return;
  }

  console.log(`Found ${images.length} images in public/ to check and compress.`);
  let processedCount = 0;
  for (const filePath of images) {
    // eslint-disable-next-line no-await-in-loop
    const result = await compressImage(filePath);
    if (result.processed) processedCount += 1;
  }

  console.log(`\nFinished: ${processedCount} image(s) compressed.`);
}

main().catch((error) => {
  console.error('Error during compression:', error);
  process.exit(1);
});
