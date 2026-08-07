import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.svg', '**/*.csv'],
  resolve: {
    alias: {
      '@sana/shared': path.resolve(import.meta.dirname, '../../packages/shared/index.ts'),
    },
  },
  optimizeDeps: {
    exclude: ['framer-motion'],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        target: 'ES2022',
        module: 'ESNext',
        lib: ['ES2022', 'DOM', 'DOM.Iterable'],
        jsx: 'react-jsx',
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        forceConsistentCasingInFileNames: true,
        resolveJsonModule: true,
        moduleResolution: 'bundler'
      }
    }
  }
});