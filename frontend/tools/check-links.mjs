import { access, readFile } from 'node:fs/promises';

const requiredAssets = ['favicon.svg', 'site.webmanifest', 'robots.txt', 'sitemap.xml', 'og-cover.webp'];
await Promise.all(requiredAssets.map((asset) => access(new URL(`../public/${asset}`, import.meta.url))));
const files = ['../src/config/site.ts', '../src/content/projectIndex.ts', '../src/components/common/DownloadCV.tsx'];
const source = (await Promise.all(files.map((file) => readFile(new URL(file, import.meta.url), 'utf8'))).then((parts) => parts.join('\n')));
const suspicious = [...source.matchAll(/https?:\/\/[^'"`\s)]+/g)].map(([url]) => url).filter((url) => /example\.(com|org)|localhost\.invalid|your-domain/i.test(url));
if (suspicious.length) throw new Error(`Fictional external URLs found: ${suspicious.join(', ')}`);
console.log(`Static link contract OK; ${requiredAssets.length} public assets present and no fictional external URL found.`);
