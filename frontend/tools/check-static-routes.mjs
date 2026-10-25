import { access, readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = join(root, 'dist');
const routes = [
  'fr', 'en', 'fr/a-propos', 'en/about', 'fr/parcours', 'en/journey', 'fr/competences', 'en/skills',
  'fr/projets', 'en/projects', 'fr/contact', 'en/contact',
  'fr/mentions-legales', 'en/legal', 'fr/confidentialite', 'en/privacy',
  'fr/projets/react-localstorage', 'fr/projets/lalana', 'fr/projets/zina-tsara-volo', 'fr/projets/mada-bmp',
  'en/projects/react-localstorage', 'en/projects/lalana', 'en/projects/zina-tsara-volo', 'en/projects/mada-bmp'
];
for (const route of routes) await access(join(dist, route, 'index.html'));
await access(join(dist, '404.html'));
const index = await readFile(join(dist, 'index.html'), 'utf8');
if (!index.includes('/assets/')) throw new Error('Built index does not contain Vite asset paths.');
if (index.includes('localhost')) throw new Error('Built index contains localhost.');
const english = await readFile(join(dist, 'en', 'index.html'), 'utf8');
if (!english.includes('<html lang="en">') || !english.includes('canonical')) throw new Error('English route metadata is incomplete.');
console.log(`Static route contract PASS: ${routes.length} route documents + 404.html exist with localized metadata.`);
