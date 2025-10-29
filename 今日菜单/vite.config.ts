import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  server: {
    port: 5173
  },
  preview: {
    port: 5173
  },
  css: {
    postcss: './postcss.config.js'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}));

