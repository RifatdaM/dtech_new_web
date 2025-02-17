import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        includePaths: [path.resolve(__dirname, 'node_modules')],
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/img/[name]-[hash][extname]`;
          }
          if (/woff|woff2|ttf|otf|eot/i.test(extType)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      }
    }
  }
});
