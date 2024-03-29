import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
/*export default defineConfig({
  plugins: [svgr(),react()],
  root: './',
  build: {
    outDir: 'dist'
  }
})*/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [svgr(),react(),],
  build: {
    outDir: "docs",
  },
})