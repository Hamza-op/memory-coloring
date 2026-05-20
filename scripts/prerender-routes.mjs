import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');
const source = join(dist, 'index.html');

const routes = [
  '/create',
  '/checkout',
  '/policies',
  '/custom-coloring-book-from-photos',
  '/personalized-coloring-book-for-kids',
  '/photo-to-coloring-page',
  '/custom-coloring-book-pakistan',
  '/birthday-coloring-book-gift',
];

if (!existsSync(source)) {
  throw new Error('dist/index.html was not found. Run vite build before prerendering routes.');
}

for (const route of routes) {
  const targetDir = join(dist, route.replace(/^\//, ''));
  mkdirSync(targetDir, { recursive: true });
  copyFileSync(source, join(targetDir, 'index.html'));
}
