import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./public/images/vitrine";
const outputDir = "./public/optimized";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter((file) =>
  /\.(jpe?g|png|heic)$/i.test(file)
);

files.forEach((file) => {
  const inputPath = path.join(inputDir, file);
  const outputName = file.replace(/\.(jpe?g|png|heic)$/i, ".webp");
  const outputPath = path.join(outputDir, outputName);

  sharp(inputPath)
    .resize(1600) // largeur max (à adapter si besoin)
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => console.log("✅ Image optimisée :", file, "→", outputName))
    .catch((err) => console.error("❌ Erreur sur", file, ":", err.message));
});