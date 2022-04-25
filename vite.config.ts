import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock',
      watchFiles: true,
    }),
  ],
  resolve: {
    alias: {
      "@/src": resolve(__dirname, 'src'),
      "@/comp": resolve(__dirname, './src/components'),
      '@/assets': resolve(__dirname, './src/assets'),
      '@/public': resolve(__dirname, './public')
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name].[hash].js",
        entryFileNames: "js/[name].[hash].js",
        assetFileNames: "[ext]/[name].[hash].[ext]"
      }
    },
  },
  server: {
    proxy: {
      '^/ss': {
        target: 'http://www.weather.com.cn/data/cityinfo/101010100.html',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ss/, '')
      },
      '^/apiPro/.*': {
        target: 'http://www.weather.com.cn/data/cityinfo/101010100.html/.*',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apiPro/, '')
      },
    }
  },
})
