const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const publicDir = path.join(__dirname, "public");
const extensions = new Set([".webp", ".jpg", ".jpeg", ".png"]);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return walk(fullPath);
    }
    return extensions.has(path.extname(entry.name).toLowerCase()) ? [fullPath] : [];
  });
}

async function convertImage(filePath) {
  const parsed = path.parse(filePath);
  const outputPath = path.join(parsed.dir, `${parsed.name}.avif`);

  await sharp(filePath)
    .rotate()
    .avif({
      quality: 62,
      effort: 6,
    })
    .toFile(outputPath);

  const originalSize = fs.statSync(filePath).size;
  const avifSize = fs.statSync(outputPath).size;
  const relativePath = path.relative(__dirname, outputPath);
  const reduction = ((1 - avifSize / originalSize) * 100).toFixed(1);

  console.log(`${relativePath} (${reduction}% smaller)`);
}

async function main() {
  const files = walk(publicDir);

  for (const file of files) {
    await convertImage(file);
  }

  console.log(`Converted ${files.length} images to AVIF.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
