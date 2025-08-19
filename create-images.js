const fs = require('fs');
const path = require('path');

// Create a simple text file that can be used as a placeholder image
const createPlaceholderImage = (filename, width, height, text) => {
  const svgContent = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#4A90E2"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 2}" 
        fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>
  `.trim();
  
  fs.writeFileSync(path.join('./src/assets', filename), svgContent, 'utf8');
  console.log(`Created ${filename}`);
};

// Create favicon
createPlaceholderImage('favicon.ico', 16, 16, 'M');

// Create logos
createPlaceholderImage('logo192.png', 192, 192, 'MG');
createPlaceholderImage('logo512.png', 512, 512, 'MG');

// Create project images
createPlaceholderImage('projects/gexfme.png', 400, 250, 'GexFME');
createPlaceholderImage('projects/wyzer.png', 400, 250, 'Wyzer');
createPlaceholderImage('projects/mindmate.png', 400, 250, 'MindMate');
createPlaceholderImage('projects/blog.png', 400, 250, 'Blog');

console.log('All images created successfully!');
