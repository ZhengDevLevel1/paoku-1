import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['paoku.png'],
          manifest: {
            name: 'Neon Gemini Runner',
            short_name: 'GeminiRunner',
            description: 'Race through a stunning synthwave cosmos at breakneck speeds.',
            theme_color: '#050011',
            background_color: '#050011',
            display: 'standalone',
            icons: [
              {
                src: 'paoku.png',
                sizes: '192x192',
                type: 'image/png'
              },
              {
                src: 'paoku.png',
                sizes: '512x512',
                type: 'image/png'
              }
            ]
          }
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
