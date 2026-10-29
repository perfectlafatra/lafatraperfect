import { writeFile } from 'node:fs/promises';

const origin = process.env.SITE_URL?.replace(/\/$/, '');
if (!origin || !/^https:\/\//.test(origin)) {
  throw new Error('SITE_URL must be a verified HTTPS production origin; no fictional domain is generated.');
}

const routes = [
  '/fr', '/fr/a-propos', '/fr/parcours', '/fr/competences', '/fr/projets', '/fr/contact', '/fr/mentions-legales', '/fr/confidentialite',
  '/en', '/en/about', '/en/journey', '/en/skills', '/en/projects', '/en/contact', '/en/legal', '/en/privacy',
  '/fr/projets/lalana', '/fr/projets/volatech', '/fr/projets/zina-tsara-volo', '/fr/projets/mada-bmp',
  '/en/projects/lalana', '/en/projects/volatech', '/en/projects/zina-tsara-volo', '/en/projects/mada-bmp'
];
const body = routes.map((route) => `  <url><loc>${origin}${route}</loc></url>`).join('\n');
await writeFile(new URL('../public/sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`);
console.log(`Generated ${routes.length} URLs for ${origin}`);
