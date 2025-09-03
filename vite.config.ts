import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/',
  plugins: [vue()],
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3001,
    host: '0.0.0.0'
  }
})
