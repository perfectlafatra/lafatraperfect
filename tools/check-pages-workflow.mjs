import { readFile } from 'node:fs/promises';

const path = '.github/workflows/deploy.yml';
let workflow;
try {
  workflow = await readFile(path, 'utf8');
} catch {
  throw new Error(`Missing GitHub Pages workflow: ${path}`);
}
for (const marker of [
  'actions/checkout@',
  'actions/setup-node@',
  'actions/configure-pages@',
  'actions/upload-pages-artifact@',
  'actions/deploy-pages@',
  'npm ci',
  'npm run verify',
  'frontend/dist',
  'pages: write',
  'id-token: write',
  'VITE_BASE_PATH'
]) {
  if (!workflow.includes(marker)) throw new Error(`Workflow marker missing: ${marker}`);
}
if (/password|token\s*:\s*['"][^$]/i.test(workflow)) throw new Error('Possible inline secret in Pages workflow.');
console.log('GitHub Pages workflow contract PASS.');
