#!/usr/bin/env node

/**
 * generate-icons.mjs
 *
 * Reads crawlio-logo.svg and generates all icon assets:
 * - favicon.ico (32x32)
 * - apple-icon.png (180x180)
 * - opengraph-image.png (1200x630)
 * - icon-192.png, icon-512.png (PWA)
 * - macOS iconset -> .icns
 * - iOS app icon PNGs
 */

import { readFileSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");
const WEBSITE = join(__dirname, "..");
const SVG_PATH = join(ROOT, "crawlio-logo.svg");

const svgData = readFileSync(SVG_PATH, "utf-8");

// Render SVG to a high-res PNG (logo centered with padding on transparent square)
function renderSvgToPng(size) {
  const padding = 0.1; // 10% padding on each side
  const innerSize = Math.round(size * (1 - 2 * padding));
  const resvg = new Resvg(svgData, {
    fitTo: { mode: "width", value: innerSize },
    background: "rgba(0,0,0,0)",
  });
  const rendered = resvg.render();
  const innerPng = rendered.asPng();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: Buffer.from(innerPng), gravity: "centre" }])
    .png()
    .toBuffer();
}

// Generate OG image (1200x630) with gradient background + centered logo
async function generateOgImage() {
  const width = 1200;
  const height = 630;
  const logoHeight = 280;

  const resvg = new Resvg(svgData, {
    fitTo: { mode: "height", value: logoHeight },
    background: "rgba(0,0,0,0)",
  });
  const rendered = resvg.render();
  const logoPng = rendered.asPng();
  const logoWidth = rendered.width;

  const bgSvg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#faf8ff;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#f0e8ff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#e8f4ff;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bg)" />
    <text x="${width / 2}" y="${height - 80}" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="600" fill="#1a1a2e">Crawlio</text>
    <text x="${width / 2}" y="${height - 35}" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="#666680">Download Websites. Build With Real Artifacts.</text>
  </svg>`;

  const bgPng = await sharp(Buffer.from(bgSvg)).png().toBuffer();

  return sharp(bgPng)
    .composite([
      {
        input: Buffer.from(logoPng),
        top: 60,
        left: Math.round((width - logoWidth) / 2),
      },
    ])
    .png()
    .toBuffer();
}

// Convert PNG to ICO format (single-image ICO wrapping PNG data)
function pngToIco(pngBuffer) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(1, 4); // 1 image

  const dirEntry = Buffer.alloc(16);
  dirEntry.writeUInt8(32, 0); // width
  dirEntry.writeUInt8(32, 1); // height
  dirEntry.writeUInt8(0, 2); // color palette
  dirEntry.writeUInt8(0, 3); // reserved
  dirEntry.writeUInt16LE(1, 4); // color planes
  dirEntry.writeUInt16LE(32, 6); // bits per pixel
  dirEntry.writeUInt32LE(pngBuffer.length, 8); // size of PNG data
  dirEntry.writeUInt32LE(22, 12); // offset (6 + 16)

  return Buffer.concat([header, dirEntry, pngBuffer]);
}

async function main() {
  console.log("Generating icons from crawlio-logo.svg...\n");

  // 1. Render base 1024x1024
  const base1024 = await renderSvgToPng(1024);
  console.log("  Rendered base 1024x1024");

  // 2. Favicon (32x32 ICO)
  const favicon32 = await sharp(base1024).resize(32, 32).png().toBuffer();
  const icoBuffer = pngToIco(favicon32);
  writeFileSync(join(WEBSITE, "app", "favicon.ico"), icoBuffer);
  console.log("  Generated app/favicon.ico");

  // 3. Apple Touch Icon (180x180)
  const apple180 = await sharp(base1024).resize(180, 180).png().toBuffer();
  writeFileSync(join(WEBSITE, "app", "apple-icon.png"), apple180);
  console.log("  Generated app/apple-icon.png");

  // 4. PWA icons
  const icon192 = await sharp(base1024).resize(192, 192).png().toBuffer();
  writeFileSync(join(WEBSITE, "public", "icon-192.png"), icon192);
  console.log("  Generated public/icon-192.png");

  const icon512 = await sharp(base1024).resize(512, 512).png().toBuffer();
  writeFileSync(join(WEBSITE, "public", "icon-512.png"), icon512);
  console.log("  Generated public/icon-512.png");

  // 5. OG Image
  const ogImage = await generateOgImage();
  writeFileSync(join(WEBSITE, "app", "opengraph-image.png"), ogImage);
  console.log("  Generated app/opengraph-image.png");

  // 6. macOS iconset
  const iconsetDir = join(ROOT, "Distribution", "Assets", "AppIcon.iconset");
  mkdirSync(iconsetDir, { recursive: true });

  const macSizes = [
    { name: "icon_16x16.png", size: 16 },
    { name: "icon_16x16@2x.png", size: 32 },
    { name: "icon_32x32.png", size: 32 },
    { name: "icon_32x32@2x.png", size: 64 },
    { name: "icon_128x128.png", size: 128 },
    { name: "icon_128x128@2x.png", size: 256 },
    { name: "icon_256x256.png", size: 256 },
    { name: "icon_256x256@2x.png", size: 512 },
    { name: "icon_512x512.png", size: 512 },
    { name: "icon_512x512@2x.png", size: 1024 },
  ];

  for (const { name, size } of macSizes) {
    const buf = await sharp(base1024).resize(size, size).png().toBuffer();
    writeFileSync(join(iconsetDir, name), buf);
  }
  console.log("  Generated macOS iconset PNGs");

  // Convert to .icns using iconutil
  const icnsPath = join(ROOT, "Distribution", "Assets", "AppIcon.icns");
  execFileSync("iconutil", ["-c", "icns", iconsetDir, "-o", icnsPath]);
  console.log("  Generated Distribution/Assets/AppIcon.icns");

  // Clean up iconset directory
  rmSync(iconsetDir, { recursive: true });

  // 7. iOS App Icons
  const iosAssetDir = join(
    ROOT,
    "Sources",
    "CrawlioMobile",
    "Assets.xcassets",
    "AppIcon.appiconset"
  );
  mkdirSync(iosAssetDir, { recursive: true });

  const iosSizes = [
    { name: "AppIcon-20@2x.png", size: 40 },
    { name: "AppIcon-20@3x.png", size: 60 },
    { name: "AppIcon-29@2x.png", size: 58 },
    { name: "AppIcon-29@3x.png", size: 87 },
    { name: "AppIcon-40@2x.png", size: 80 },
    { name: "AppIcon-40@3x.png", size: 120 },
    { name: "AppIcon-60@2x.png", size: 120 },
    { name: "AppIcon-60@3x.png", size: 180 },
    { name: "AppIcon-76@2x.png", size: 152 },
    { name: "AppIcon-83.5@2x.png", size: 167 },
    { name: "AppIcon-1024.png", size: 1024 },
  ];

  for (const { name, size } of iosSizes) {
    const buf = await sharp(base1024).resize(size, size).png().toBuffer();
    writeFileSync(join(iosAssetDir, name), buf);
  }
  console.log("  Generated iOS app icon PNGs");

  // Write Contents.json for iOS AppIcon
  const contentsJson = {
    images: [
      { filename: "AppIcon-20@2x.png", idiom: "iphone", scale: "2x", size: "20x20" },
      { filename: "AppIcon-20@3x.png", idiom: "iphone", scale: "3x", size: "20x20" },
      { filename: "AppIcon-29@2x.png", idiom: "iphone", scale: "2x", size: "29x29" },
      { filename: "AppIcon-29@3x.png", idiom: "iphone", scale: "3x", size: "29x29" },
      { filename: "AppIcon-40@2x.png", idiom: "iphone", scale: "2x", size: "40x40" },
      { filename: "AppIcon-40@3x.png", idiom: "iphone", scale: "3x", size: "40x40" },
      { filename: "AppIcon-60@2x.png", idiom: "iphone", scale: "2x", size: "60x60" },
      { filename: "AppIcon-60@3x.png", idiom: "iphone", scale: "3x", size: "60x60" },
      { filename: "AppIcon-20@2x.png", idiom: "ipad", scale: "2x", size: "20x20" },
      { filename: "AppIcon-29@2x.png", idiom: "ipad", scale: "2x", size: "29x29" },
      { filename: "AppIcon-40@2x.png", idiom: "ipad", scale: "2x", size: "40x40" },
      { filename: "AppIcon-76@2x.png", idiom: "ipad", scale: "2x", size: "76x76" },
      { filename: "AppIcon-83.5@2x.png", idiom: "ipad", scale: "2x", size: "83.5x83.5" },
      { filename: "AppIcon-1024.png", idiom: "ios-marketing", scale: "1x", size: "1024x1024" },
    ],
    info: { author: "xcode", version: 1 },
  };

  writeFileSync(
    join(iosAssetDir, "Contents.json"),
    JSON.stringify(contentsJson, null, 2) + "\n"
  );
  console.log("  Generated iOS Contents.json");

  // Root Assets.xcassets/Contents.json
  const xcassetsDir = join(ROOT, "Sources", "CrawlioMobile", "Assets.xcassets");
  writeFileSync(
    join(xcassetsDir, "Contents.json"),
    JSON.stringify({ info: { author: "xcode", version: 1 } }, null, 2) + "\n"
  );

  console.log("\nAll icons generated successfully!");
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
