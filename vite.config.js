import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig({

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically updates the service worker
      includeAssets: ['favicon.ico', 'robots.txt', 'sitemap.xml'], // Include additional assets to cache
      manifest: {
        name: 'Byte Blaze',
        short_name: 'Blaze',
        description: 'My awesome React app!',
        theme_color: '#000000',
        icons: [
          {
            src: './src/assets/logo.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './src/assets/logo.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
