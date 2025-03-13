import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My-Profile/',
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    hmr: {
      host: '192.168.1.109'
    }
  }
});
