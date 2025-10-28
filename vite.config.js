import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: base must match your GitHub Pages project path
export default defineConfig({
  base: '/schematic-marketing/',
  plugins: [react()],
})
