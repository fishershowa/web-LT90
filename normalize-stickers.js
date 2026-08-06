const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = path.join(__dirname, "public", "stickers");
const outputDir = path.join(__dirname, "public", "stickers-normalized");

const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 900;

// Altura EXACTA que tendrá el dibujo
const TARGET_HEIGHT = 430;

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function normalize(file) {
  const input = path.join(inputDir, file);

  // Recorta automáticamente toda la transparencia
  const trimmed = sharp(input).trim();

  const meta = await trimmed.metadata();

  // Escala usando SOLO la altura
  const scale = TARGET_HEIGHT / meta.height;

  const width = Math.round(meta.width * scale);
  const height = Math.round(meta.height * scale);

  const buffer = await trimmed
    .resize(width, height, {
      fit: "contain",
      kernel: sharp.kernel.lanczos3,
    })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      {
        input: buffer,
        gravity: "center",
      },
    ])
    .png()
    .toFile(path.join(outputDir, file));

  console.log("✔", file);
}

(async () => {
  const files = fs
    .readdirSync(inputDir)
    .filter((f) => f.toLowerCase().endsWith(".png"));

  for (const file of files) {
    await normalize(file);
  }

  console.log("\n✅ Todos los stickers fueron normalizados.");
})();