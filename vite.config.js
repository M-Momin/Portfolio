import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import json from '@rollup/plugin-json';

// https://vitejs.dev/config/
/*export default defineConfig({
  plugins: [svgr(),react()],
  root: './',
  build: {
    outDir: 'dist'
  }
})*/
export default defineConfig({
  plugins: [svgr(),react(), json(),],
  build: {
    outDir: "docs",
  },
})