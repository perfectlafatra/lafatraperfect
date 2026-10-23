import { writeFile } from 'node:fs/promises';

const origin = process.env.SITE_URL?.replace(/\/$/, '');
if (!origin || !/^https:\/\//.test(origin)) {
  throw new Error('SITE_URL must be a verified HTTPS production origin; no fictional domain is generated.');
}

const routes = [
  '/fr', '/fr/a-propos', '/fr/parcours', '/fr/competences', '/fr/projets', '/fr/methode', '/fr/contact', '/fr/mentions-legales', '/fr/confidentialite',
  '/en', '/en/about', '/en/journey', '/en/skills', '/en/projects', '/en/method', '/en/contact', '/en/legal', '/en/privacy',
  '/fr/projets/react-localstorage', '/fr/projets/lalana', '/fr/projets/zina-tsara-volo', '/fr/projets/mada-bmp',
  '/en/projects/react-localstorage', '/en/projects/lalana', '/en/projects/zina-tsara-volo', '/en/projects/mada-bmp'
];
const journalSlugs = [
  'architecture-fullstack-maintenable', 'api-rest-spring-boot', 'postgresql-integrite-migrations',
  'interface-react-responsive', 'securiser-authentification', 'documenter-projet-star',
  'tester-fiabiliser-fullstack', 'preparer-deploiement', 'experience-bilingue-fr-en',
  'resoudre-anomalie-technique'
];
for (const slug of journalSlugs) {
  routes.push(`/fr/journal/${slug}`, `/en/journal/${slug}`);
}
const body = routes.map((route) => `  <url><loc>${origin}${route}</loc></url>`).join('\n');
await writeFile(new URL('../public/sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`);
console.log(`Generated ${routes.length} URLs for ${origin}`);
