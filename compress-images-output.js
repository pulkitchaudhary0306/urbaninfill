const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const archivesDir = path.join(__dirname, 'public', 'Archives');
const outputDir = path.join(__dirname, 'compressed-images');
const MAX_SIZE_KB = 100;
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function compressImage(inputPath) {
  const fileName = path.basename(inputPath);
  const outputPath = path.join(outputDir, fileName);
  
  try {
    // Get original file size
    const originalStats = fs.statSync(inputPath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(2);
    
    if (originalStats.size <= MAX_SIZE_BYTES) {
      // Copy already optimized file
      fs.copyFileSync(inputPath, outputPath);
      console.log(`✓ ${fileName} already optimized (${originalSizeKB} KB) - copied`);
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
    let iterations = 0;
    const maxIterations = 20;
    
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
      iterations++;
    } while (buffer.length > MAX_SIZE_BYTES && newWidth > 400 && iterations < maxIterations);
    
    // Write compressed image
    fs.writeFileSync(outputPath, buffer);
    
    const newSizeKB = (buffer.length / 1024).toFixed(2);
    const reduction = ((1 - buffer.length / originalStats.size) * 100).toFixed(1);
    
    console.log(`✓ ${fileName} compressed: ${originalSizeKB} KB → ${newSizeKB} KB (${reduction}% reduction)`);
    
  } catch (error) {
    console.error(`✗ Error compressing ${fileName}:`, error.message);
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
    console.log(`Output directory: ${outputDir}\n`);
    
    for (const file of files) {
      await compressImage(file);
    }
    
    console.log('\n✓ Compression complete!');
    console.log(`\nCompressed images are in: ${outputDir}`);
    console.log('Copy these files to public/Archives to replace the original images.');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
