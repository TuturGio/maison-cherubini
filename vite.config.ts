import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 AJOUTE CETTE LIGNE (très important pour les chemins relatifs)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

