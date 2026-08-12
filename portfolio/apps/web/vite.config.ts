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
    port: 5173,
    hmr: {
      overlay: false,
    },
    proxy: {
      '/api': {
        target: 'https://sana-portfolio-weld.vercel.app', // Apni live Vercel domain yahan set kar den
        changeOrigin: true,
        secure: false,
      },
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