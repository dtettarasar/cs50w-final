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
    proxy: {
      '/api': 'http://127.0.0.1:8000',
    }
  },

  build: {
    outDir: 'dist',   // default
    assetsDir: 'assets',
    manifest: true, // ✅ utile pour Django
  },

  base: "/",   // 🔥 assets seront demandés depuis /static/
  
})
