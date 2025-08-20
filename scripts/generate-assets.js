import sharp from 'sharp';
import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// Icon sizes needed for PWA and Apple
const iconSizes = [
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 16, name: 'favicon-16x16.png' }
];

// Generate OpenGraph image (1200x630)
async function generateOGImage() {
  const ogImagePath = join(publicDir, 'og-image.jpg');
  
  // Create a simple OG image with brand colors
  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#47A7EB;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0C3745;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#gradient)"/>
      <text x="600" y="200" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle">
        Beach Bird Studios
      </text>
      <text x="600" y="280" font-family="Arial, sans-serif" font-size="36" fill="#FFC107" text-anchor="middle">
        Wilmington Web Design &amp; SEO
      </text>
      <text x="600" y="350" font-family="Arial, sans-serif" font-size="28" fill="white" text-anchor="middle">
        100+ Page Websites That Dominate Search
      </text>
      <text x="600" y="420" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle">
        Custom Design • AI Development • SEO Services
      </text>
      <text x="600" y="520" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#FFC107" text-anchor="middle">
        910-512-6990
      </text>
    </svg>
  `;
  
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(ogImagePath);
  
  console.log('✅ Generated OpenGraph image');
}

// Generate icons from SVG logo
async function generateIcons() {
  // We'll use a simplified version of the logo for icons
  const iconSvg = `
    <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#47A7EB;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0C3745;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="100" fill="url(#bg)"/>
      <text x="256" y="280" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white" text-anchor="middle">
        BB
      </text>
      <text x="256" y="380" font-family="Arial, sans-serif" font-size="60" fill="#FFC107" text-anchor="middle">
        STUDIOS
      </text>
    </svg>
  `;
  
  // Generate each icon size
  for (const { size, name } of iconSizes) {
    const outputPath = join(publicDir, name);
    
    await sharp(Buffer.from(iconSvg))
      .resize(size, size)
      .png()
      .toFile(outputPath);
    
    console.log(`✅ Generated ${name} (${size}x${size})`);
  }
}

// Generate screenshot placeholders
async function generateScreenshots() {
  // Desktop screenshot
  const desktopSvg = `
    <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
      <rect width="1920" height="1080" fill="#F5E6D3"/>
      <rect width="1920" height="80" fill="#47A7EB"/>
      <text x="960" y="50" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle">
        Beach Bird Studios - Professional Web Design
      </text>
      <text x="960" y="540" font-family="Arial, sans-serif" font-size="48" fill="#0C3745" text-anchor="middle">
        Custom Websites • AI Development • SEO Services
      </text>
    </svg>
  `;
  
  await sharp(Buffer.from(desktopSvg))
    .png()
    .toFile(join(publicDir, 'screenshot-desktop.png'));
  
  // Mobile screenshot
  const mobileSvg = `
    <svg width="390" height="844" xmlns="http://www.w3.org/2000/svg">
      <rect width="390" height="844" fill="#F5E6D3"/>
      <rect width="390" height="60" fill="#47A7EB"/>
      <text x="195" y="40" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle">
        Beach Bird Studios
      </text>
      <text x="195" y="422" font-family="Arial, sans-serif" font-size="24" fill="#0C3745" text-anchor="middle">
        Web Design &amp; SEO
      </text>
    </svg>
  `;
  
  await sharp(Buffer.from(mobileSvg))
    .png()
    .toFile(join(publicDir, 'screenshot-mobile.png'));
  
  console.log('✅ Generated screenshot placeholders');
}

// Run all generators
async function generateAllAssets() {
  try {
    console.log('🎨 Generating image assets...\n');
    
    await generateOGImage();
    await generateIcons();
    await generateScreenshots();
    
    console.log('\n✨ All assets generated successfully!');
  } catch (error) {
    console.error('❌ Error generating assets:', error);
    process.exit(1);
  }
}

generateAllAssets();