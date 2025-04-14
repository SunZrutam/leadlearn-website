const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create deployment directory structure
const deploymentDir = path.join(__dirname, 'deployment');
const publicDir = path.join(deploymentDir, 'public');
const nextDir = path.join(deploymentDir, '.next');

// Ensure directories exist
if (!fs.existsSync(deploymentDir)) fs.mkdirSync(deploymentDir);
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
if (!fs.existsSync(nextDir)) fs.mkdirSync(nextDir);

// Copy essential files
const filesToCopy = [
  'package.json',
  'package-lock.json',
  'next.config.mjs',
  'postcss.config.mjs',
  'tailwind.config.js',
  'tsconfig.json',
  '.gitignore'
];

// Copy files
filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(deploymentDir, file));
  }
});

// Copy public directory
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy directories
copyDir('public', publicDir);
copyDir('.next', nextDir);

// Create start script
const startScript = `#!/bin/bash
npm install
npm run build
npm start
`;

fs.writeFileSync(path.join(deploymentDir, 'start.sh'), startScript);

// Create .env file
const envContent = `NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://your-domain.com
`;

fs.writeFileSync(path.join(deploymentDir, '.env'), envContent);

console.log('Deployment package created successfully in the "deployment" directory');
console.log('Next steps:');
console.log('1. Upload the contents of the "deployment" directory to your Hostinger public_html folder');
console.log('2. Make the start.sh script executable: chmod +x start.sh');
console.log('3. In Hostinger Node.js settings, set the start command to: ./start.sh'); 