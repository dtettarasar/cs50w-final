import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    tailwindcss(),
  ],

  server: {
    port: 5173,
    host: true,  // 🔥 écoute sur 0.0.0.0
    proxy: {
      '/api': 'http://django-backend:8000',
    }
  },

  build: {
    outDir: 'dist',   // default
    assetsDir: 'assets',
    manifest: true, // ✅ utile pour Django
  },

  base: "/", // normal, puisque le front est servi par Vite ou Nginx
  
})
