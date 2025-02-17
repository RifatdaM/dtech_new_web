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
      '/fonts': path.resolve(__dirname, 'public/fonts'),
      '/img': path.resolve(__dirname, 'public/img'),
    }
  },
  build: {
    chunkSizeWarningLimit: 1000,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['bootstrap', 'react-bootstrap'],
          'vendor-animation': ['gsap', '@gsap/react'],
          'vendor-utils': ['jquery', 'swiper', 'react-slick'],
          'vendor-forms': ['react-hook-form', 'yup'],
        },
        assetFileNames: ({ name }) => {
          if (!name) return 'assets/[name]-[hash][extname]';
          
          if (name.match(/\.(woff2?|ttf|eot)$/)) {
            return 'assets/fonts/[name][extname]';
          }
          
          if (name.match(/\.(png|jpe?g|gif|svg|webp)$/)) {
            return 'assets/img/[name][extname]';
          }
          
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  preview: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  }
});
