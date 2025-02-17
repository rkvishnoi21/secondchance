const { execSync } = require('child_process');

try {
  // Clean up
  execSync('rm -rf dist', { stdio: 'inherit' });
  
  // Type checking
  execSync('tsc --noEmit', { stdio: 'inherit' });
  
  // Build
  execSync('vite build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
