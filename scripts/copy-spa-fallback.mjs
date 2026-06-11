import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve(process.cwd(), 'dist');
const index = resolve(dist, 'index.html');
const fallback = resolve(dist, '404.html');

if (existsSync(index)) {
  copyFileSync(index, fallback);
  console.log('Created dist/404.html for GitHub Pages SPA fallback');
}
