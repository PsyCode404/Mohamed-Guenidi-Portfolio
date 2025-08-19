const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create a blue background with white text
const createImage = async (filename, width, height, text, fontSize) => {
  // Create SVG content
  const svgContent = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#4A90E2"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${fontSize}" 
          fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>
  `.trim();

  // Convert SVG to PNG
  await sharp(Buffer.from(svgContent))
    .png()
    .toFile(path.join('./src/assets/images', filename));
  
  console.log(`Created ${filename}`);
};

// Generate all images
const generateImages = async () => {
  try {
    // Create favicon as PNG (browsers can use PNG as favicon)
    await createImage('favicon.png', 32, 32, 'M', 24);
    
    // Rename it to favicon.ico since that's what's referenced in manifest
    fs.renameSync(path.join('./src/assets/images', 'favicon.png'), path.join('./src/assets/images', 'favicon.ico'));
    
    await createImage('logo192.png', 192, 192, 'MG', 96);
    await createImage('logo512.png', 512, 512, 'MG', 256);
    await createImage('PortfolioPic.png', 400, 400, 'MG', 120);
    console.log('All images generated successfully!');
  } catch (error) {
    console.error('Error generating images:', error);
  }
};

generateImages();
