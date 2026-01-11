import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/bridges-repo/',
  plugins: [react()],
  server: {
    port: 5173,
  },
})
