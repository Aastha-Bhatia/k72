import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: true,
    },
  },
  // to fix Tailwind v4 HMR issues
  optimizeDeps: {
    exclude: ['@tailwindcss/vite'],
    force: true,
  },
})