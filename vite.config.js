import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://findwork.dev',
        changeOrigin: true,

        rewrite: (path) => path.replace(/^\/api/, '/api'),

      }
    }
  },
  define: {
    'process.env': {
      VITE_API_URL: process.env.VITE_API_URL
    }
  }
})
