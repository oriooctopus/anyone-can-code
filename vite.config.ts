import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import reactSvgPlugin from 'vite-plugin-react-svg';

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    reactSvgPlugin({
      defaultExport: 'component',
    }),
    EnvironmentPlugin({
      backendURL: process.env.BACKEND_URL,
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
  // base: '/anyone-can-code',
  // base: process.env.baseURL,
});
