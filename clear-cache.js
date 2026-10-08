#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const targets = [
  '.next/cache',
  '.turbo',
  'node_modules/.cache'
];

function rmrf(targetPath) {
  try {
    if (fs.existsSync(targetPath)) {
      fs.rmSync(targetPath, { recursive: true, force: true });
      console.log(`[cache] removed: ${targetPath}`);
    } else {
      console.log(`[cache] not found: ${targetPath}`);
    }
  } catch (err) {
    console.warn(`[cache] failed to remove: ${targetPath}`, err.message);
  }
}

(function main() {
  const root = __dirname;
  console.log('[cache] clearing Next.js caches...');
  for (const rel of targets) {
    rmrf(path.join(root, rel));
  }
  console.log('[cache] done.');
})();
