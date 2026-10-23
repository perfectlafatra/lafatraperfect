import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const rootEnv = loadEnv(mode, resolve(__dirname, '..'), 'VITE_');
  const port = Number(rootEnv.VITE_PORT || 3002);
  const configuredBase = rootEnv.VITE_BASE_PATH?.trim() || '/';
  const base = configuredBase.endsWith('/') ? configuredBase : `${configuredBase}/`;

  return {
    envDir: resolve(__dirname, '..'),
    base,
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port,
      strictPort: true,
    },
    preview: {
      host: '0.0.0.0',
      port,
      strictPort: true
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/test/setup.ts',
      css: true
    }
  };
});

