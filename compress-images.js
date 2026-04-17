const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const archivesDir = path.join(__dirname, 'public', 'Archives');
const MAX_SIZE_KB = 100;
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;

async function compressImage(inputPath) {
  const fileName = path.basename(inputPath);
  const tempPath = inputPath + '.temp';
  
  try {
    // Get original file size
    const originalStats = fs.statSync(inputPath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(2);
    
    if (originalStats.size <= MAX_SIZE_BYTES) {
      console.log(`✓ ${fileName} already optimized (${originalSizeKB} KB)`);
      return;
    }
    
    console.log(`Compressing ${fileName} (${originalSizeKB} KB)...`);
    
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    const { width, height } = metadata;
    
    // Calculate new dimensions (max 1200px width/height)
    const maxDimension = 1200;
    let newWidth = width;
    let newHeight = height;
    
    if (width > maxDimension || height > maxDimension) {
      if (width > height) {
        newWidth = maxDimension;
        newHeight = Math.round((height / width) * maxDimension);
      } else {
        newHeight = maxDimension;
        newWidth = Math.round((width / height) * maxDimension);
      }
    }
    
    // Start with high quality and reduce until under 100KB
    let quality = 85;
    let buffer;
    
    do {
      buffer = await sharp(inputPath)
        .resize(newWidth, newHeight, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: quality, effort: 6 })
        .toBuffer();
      
      if (buffer.length > MAX_SIZE_BYTES) {
        quality -= 5;
        // If quality gets too low, reduce dimensions
        if (quality < 50) {
          quality = 75;
          newWidth = Math.round(newWidth * 0.8);
          newHeight = Math.round(newHeight * 0.8);
        }
      }
    } while (buffer.length > MAX_SIZE_BYTES && newWidth > 400);
    
    // Write compressed image
    fs.writeFileSync(tempPath, buffer);
    fs.renameSync(tempPath, inputPath);
    
    const newSizeKB = (buffer.length / 1024).toFixed(2);
    const reduction = ((1 - buffer.length / originalStats.size) * 100).toFixed(1);
    
    console.log(`✓ ${fileName} compressed: ${originalSizeKB} KB → ${newSizeKB} KB (${reduction}% reduction)`);
    
  } catch (error) {
    console.error(`✗ Error compressing ${fileName}:`, error.message);
    // Clean up temp file if exists
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

async function main() {
  try {
    const files = fs.readdirSync(archivesDir)
      .filter(file => file.toLowerCase().endsWith('.webp') || 
                      file.toLowerCase().endsWith('.jpg') || 
                      file.toLowerCase().endsWith('.jpeg') ||
                      file.toLowerCase().endsWith('.png'))
      .map(file => path.join(archivesDir, file));
    
    if (files.length === 0) {
      console.log('No image files found in Archives folder.');
      return;
    }
    
    console.log(`Found ${files.length} images to process...\n`);
    
    for (const file of files) {
      await compressImage(file);
    }
    
    console.log('\n✓ Compression complete!');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
