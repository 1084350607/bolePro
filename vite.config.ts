import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { viteMockServe } from "vite-plugin-mock"
import viteImagemin from "vite-plugin-imagemin"
import viteCompression from "vite-plugin-compression"

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    // TODO
    viteMockServe({
      mockPath: "mock",
      watchFiles: true,
    }),
    viteCompression({
      //打包的是gzip,如果后端也开启gzip资源，浏览器会直接走gzip资源，提高传输效率
      verbose: true,
      disable: false,
      //大于10240b才压缩
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@/src": resolve(__dirname, "src"),
      "@/comp": resolve(__dirname, "./src/components"),
      "@/assets": resolve(__dirname, "./src/assets"),
      "@/public": resolve(__dirname, "./public"),
    },
  },
  build: {
    // 启用terser清除console.log()
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      // 打包目录优化
      output: {
        chunkFileNames: "js/[name].[hash].js",
        entryFileNames: "js/[name].[hash].js",
        assetFileNames: "[ext]/[name].[hash].[ext]",
      },
    },
  },
  server: {
    proxy: {
      "^/ss": {
        target: "http://www.weather.com.cn/data/cityinfo/101010100.html",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/ss/, ""),
      },
      "^/apiPro/.*": {
        target: "http://www.weather.com.cn/data/cityinfo/101010100.html/.*",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/apiPro/, ""),
      },
    },
  },
})
