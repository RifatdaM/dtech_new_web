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
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
    }
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          styles: ['bootstrap', 'sass']
        },
        assetFileNames: ({ name }) => {
          if (!name) return 'assets/[name]-[hash][extname]';
          
          if (name.match(/\.(woff2?|ttf|eot)$/)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          
          if (name.match(/\.(png|jpe?g|gif|svg|webp)$/)) {
            return 'assets/img/[name]-[hash][extname]';
          }
          
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  publicDir: 'public'
});
