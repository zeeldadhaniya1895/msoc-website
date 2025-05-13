import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500, // કિલોબાઇટ્સમાં ચંક સાઇઝ લિમિટ
  }
})
