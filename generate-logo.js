const fs = require('fs');

// Create a simple blue square with text as favicon
const faviconContent = `
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <rect width="16" height="16" fill="#4A90E2"/>
  <text x="8" y="12" font-family="Arial" font-size="12" text-anchor="middle" fill="white">M</text>
</svg>
`;

// Write favicon.ico
fs.writeFileSync('./public/favicon.ico', faviconContent, 'utf8');

// Create a larger logo for logo192.png and logo512.png
const logo192Content = `
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192">
  <rect width="192" height="192" fill="#4A90E2"/>
  <text x="96" y="120" font-family="Arial" font-size="96" text-anchor="middle" fill="white">M</text>
</svg>
`;

const logo512Content = `
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#4A90E2"/>
  <text x="256" y="320" font-family="Arial" font-size="256" text-anchor="middle" fill="white">M</text>
</svg>
`;

// Write logo files
fs.writeFileSync('./public/logo192.png', logo192Content, 'utf8');
fs.writeFileSync('./public/logo512.png', logo512Content, 'utf8');

console.log('Logo files generated successfully!');
