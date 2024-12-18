// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': resolve(__dirname, 'src'), // This allows you to use '@' as an alias for your src directory
    },
  },
});