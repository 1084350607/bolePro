import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      "@/src": resolve(__dirname, 'src'),
      "@/comp": resolve(__dirname, './src/components'),
      '@/assets': resolve(__dirname, './src/assets'),
      '@/public': resolve(__dirname, './public')
    }
  },
  plugins: [vue()]
})
