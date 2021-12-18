import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import reactSvgPlugin from 'vite-plugin-react-svg';

export default defineConfig({
  plugins: [
    react(),
    reactSvgPlugin({
      defaultExport: 'component',
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      src: path.resolve(__dirname, './src'),
    },
  },
  server: { port: 4000, host: true },
  base: '/anyone-can-code',
});
