import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      }
    }
  },
  resolve: {
    alias: {
      '~@utrecht': path.resolve(__dirname, 'node_modules/@utrecht'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        'mw-nora-components': path.resolve(__dirname, 'resources/css/mw-nora-components.scss'),
        'mw-custom': path.resolve(__dirname, 'resources/css/mw-custom.scss')
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.names[0])) {
            return 'assets/fonts/[name][extname]'; // Fonts gaan nu in dist/assets/fonts/
          }
          return '[name][extname]';
        }
      }
    }
  }
});