import { spawn } from "child_process";
import fs from "fs";
import path from "path";

// ===============================
// CONFIG
// ===============================
const inputDir = "./public/videos/new";
const outputDir = "./public/videos-optimized";

const allowedExtensions = [".mp4", ".mov"];

// ===============================
// UTILS
// ===============================
function logInfo(msg) {
  console.log(`\x1b[36m[INFO]\x1b[0m ${msg}`);
}

function logSuccess(msg) {
  console.log(`\x1b[32m[SUCCESS]\x1b[0m ${msg}`);
}

function logError(msg) {
  console.log(`\x1b[31m[ERROR]\x1b[0m ${msg}`);
}

function progressBar(percent) {
  const width = 30;
  const filled = Math.round((percent / 100) * width);
  const bar = "█".repeat(filled) + "░".repeat(width - filled);
  return `[${bar}] ${percent}%`;
}

// ===============================
// FFmpeg EXECUTION WITH PROGRESS
// ===============================
function runFFmpeg(args, label) {
  return new Promise((resolve, reject) => {
    const ff = spawn("ffmpeg", args);

    ff.stderr.on("data", (data) => {
      const str = data.toString();

      const timeMatch = str.match(/time=(\d+):(\d+):(\d+\.\d+)/);
      const durationMatch = str.match(/Duration: (\d+):(\d+):(\d+\.\d+)/);

      if (durationMatch) {
        const [_, h, m, s] = durationMatch;
        ff.totalSeconds = Number(h) * 3600 + Number(m) * 60 + Number(s);
      }

      if (timeMatch && ff.totalSeconds) {
        const [_, h, m, s] = timeMatch;
        const current = Number(h) * 3600 + Number(m) * 60 + Number(s);
        const percent = Math.min(100, Math.round((current / ff.totalSeconds) * 100));
        process.stdout.write(`\r${label} ${progressBar(percent)}`);
      }
    });

    ff.on("close", (code) => {
      process.stdout.write("\n");
      if (code === 0) resolve();
      else reject(new Error(`FFmpeg exited with code ${code}`));
    });
  });
}

// ===============================
// MAIN PROCESS
// ===============================
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter((file) =>
  allowedExtensions.some((ext) => file.toLowerCase().endsWith(ext))
);

if (files.length === 0) {
  logError("Aucune vidéo trouvée.");
  process.exit(1);
}

(async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const baseName = file.replace(path.extname(file), "");
    const outputMP4 = path.join(outputDir, `${baseName}-mobile.mp4`);

    logInfo(`Optimisation de : ${file}`);

    await runFFmpeg(
      [
        "-i", inputPath,

        // 🎯 VIDEO — poids divisé par 2
        "-c:v", "libx264",
        "-preset", "slow",              // meilleure compression
        "-crf", "28",                   // 🔥 poids divisé par 2
        "-vf", "scale=720:-2,fps=30",   // 🔥 résolution + FPS optimisés
        "-pix_fmt", "yuv420p",
        "-profile:v", "baseline",
        "-level", "3.0",

        // 🎯 AUDIO — compressé mais propre
        "-c:a", "aac",
        "-b:a", "96k",

        // 🎯 WEB OPTIMIZATION
        "-movflags", "+faststart",

        outputMP4
      ],
      `MP4 → ${baseName}`
    );

    logSuccess(`MP4 généré : ${outputMP4}`);
  }

  logSuccess("🎉 Toutes les vidéos ont été compressées (≈ poids divisé par 2) !");
})();

















/* 
import { spawn } from "child_process";
import fs from "fs";
import path from "path";

// ===============================
// CONFIG
// ===============================
const inputDir = "./public/videos";
const outputDir = "./public/videos-optimized";

const allowedExtensions = [".mp4", ".mov"];

// ===============================
// UTILS
// ===============================
function logInfo(msg) {
  console.log(`\x1b[36m[INFO]\x1b[0m ${msg}`);
}

function logSuccess(msg) {
  console.log(`\x1b[32m[SUCCESS]\x1b[0m ${msg}`);
}

function logError(msg) {
  console.log(`\x1b[31m[ERROR]\x1b[0m ${msg}`);
}

function progressBar(percent) {
  const width = 30;
  const filled = Math.round((percent / 100) * width);
  const bar = "█".repeat(filled) + "░".repeat(width - filled);
  return `[${bar}] ${percent}%`;
}

// ===============================
// FFmpeg EXECUTION WITH PROGRESS
// ===============================
function runFFmpeg(args, label) {
  return new Promise((resolve, reject) => {
    const ff = spawn("ffmpeg", args);

    ff.stderr.on("data", (data) => {
      const str = data.toString();

      // Parse progress
      const timeMatch = str.match(/time=(\d+):(\d+):(\d+\.\d+)/);
      const durationMatch = str.match(/Duration: (\d+):(\d+):(\d+\.\d+)/);

      if (durationMatch) {
        const [_, h, m, s] = durationMatch;
        ff.totalSeconds = Number(h) * 3600 + Number(m) * 60 + Number(s);
      }

      if (timeMatch && ff.totalSeconds) {
        const [_, h, m, s] = timeMatch;
        const current = Number(h) * 3600 + Number(m) * 60 + Number(s);
        const percent = Math.min(100, Math.round((current / ff.totalSeconds) * 100));
        process.stdout.write(`\r${label} ${progressBar(percent)}`);
      }
    });

    ff.on("close", (code) => {
      process.stdout.write("\n");
      if (code === 0) resolve();
      else reject(new Error(`FFmpeg exited with code ${code}`));
    });
  });
}

// ===============================
// MAIN PROCESS
// ===============================
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter((file) =>
  allowedExtensions.some((ext) => file.toLowerCase().endsWith(ext))
);

if (files.length === 0) {
  logError("Aucune vidéo trouvée.");
  process.exit(1);
}

(async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const baseName = file.replace(path.extname(file), "");
    const outputMP4 = path.join(outputDir, `${baseName}-mobile.mp4`);
    const outputWEBM = path.join(outputDir, `${baseName}-mobile.webm`);

    logInfo(`Optimisation de : ${file}`);

    // ===============================
    // MP4 (H.264)
    // ===============================
    await runFFmpeg(
      [
        "-i", inputPath,
        "-vcodec", "libx264",
        "-preset", "veryfast",
        "-crf", "26",
        "-vf", "scale=854:-1",
        "-acodec", "aac",
        outputMP4
      ],
      `MP4 → ${baseName}`
    );

    logSuccess(`MP4 généré : ${outputMP4}`);

    // ===============================
    // WEBM (VP9)
    // ===============================
    await runFFmpeg(
      [
        "-i", inputPath,
        "-c:v", "libvpx-vp9",
        "-b:v", "0",
        "-crf", "32",
        "-vf", "scale=854:-1",
        "-c:a", "libopus",
        outputWEBM
      ],
      `WEBM → ${baseName}`
    );

    logSuccess(`WEBM généré : ${outputWEBM}`);
  }

  logSuccess("🎉 Toutes les vidéos ont été optimisées !");
})();

 */
// Version mp4 only

/* import { spawn } from "child_process";
import fs from "fs";
import path from "path";

// ===============================
// CONFIG
// ===============================
const inputDir = "./public/videos/new/10mo";
const outputDir = "./public/videos-optimized";

const allowedExtensions = [".mp4", ".mov"];

// ===============================
// UTILS
// ===============================
function logInfo(msg) {
  console.log(`\x1b[36m[INFO]\x1b[0m ${msg}`);
}

function logSuccess(msg) {
  console.log(`\x1b[32m[SUCCESS]\x1b[0m ${msg}`);
}

function logError(msg) {
  console.log(`\x1b[31m[ERROR]\x1b[0m ${msg}`);
}

function progressBar(percent) {
  const width = 30;
  const filled = Math.round((percent / 100) * width);
  const bar = "█".repeat(filled) + "░".repeat(width - filled);
  return `[${bar}] ${percent}%`;
}

// ===============================
// FFmpeg EXECUTION WITH PROGRESS
// ===============================
function runFFmpeg(args, label) {
  return new Promise((resolve, reject) => {
    const ff = spawn("ffmpeg", args);

    ff.stderr.on("data", (data) => {
      const str = data.toString();

      // Parse progress
      const timeMatch = str.match(/time=(\d+):(\d+):(\d+\.\d+)/);
      const durationMatch = str.match(/Duration: (\d+):(\d+):(\d+\.\d+)/);

      if (durationMatch) {
        const [_, h, m, s] = durationMatch;
        ff.totalSeconds = Number(h) * 3600 + Number(m) * 60 + Number(s);
      }

      if (timeMatch && ff.totalSeconds) {
        const [_, h, m, s] = timeMatch;
        const current = Number(h) * 3600 + Number(m) * 60 + Number(s);
        const percent = Math.min(100, Math.round((current / ff.totalSeconds) * 100));
        process.stdout.write(`\r${label} ${progressBar(percent)}`);
      }
    });

    ff.on("close", (code) => {
      process.stdout.write("\n");
      if (code === 0) resolve();
      else reject(new Error(`FFmpeg exited with code ${code}`));
    });
  });
}

// ===============================
// MAIN PROCESS
// ===============================
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter((file) =>
  allowedExtensions.some((ext) => file.toLowerCase().endsWith(ext))
);

if (files.length === 0) {
  logError("Aucune vidéo trouvée.");
  process.exit(1);
}

(async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const baseName = file.replace(path.extname(file), "");
    const outputMP4 = path.join(outputDir, `${baseName}-mobile.mp4`);

    logInfo(`Optimisation de : ${file}`);

    // ===============================
    // MP4 (H.264) — Format universel mobile
    // ===============================
    await runFFmpeg(
      [
        "-i", inputPath,
        "-vcodec", "libx264",
        "-preset", "veryfast",
        "-crf", "26",
        "-vf", "scale=854:-1",
        "-acodec", "aac",
        "-movflags", "+faststart", // optimisation streaming
        outputMP4
      ],
      `MP4 → ${baseName}`
    );

    logSuccess(`MP4 généré : ${outputMP4}`);
  }

  logSuccess("🎉 Toutes les vidéos ont été optimisées en MP4 !");
})();
 */