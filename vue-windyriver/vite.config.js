import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    // 代码分割优化
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router']
        }
      }
    },
    // 使用 esbuild 压缩 (Vite 默认，无需额外依赖)
    minify: 'esbuild',
    // 资源内联阈值
    assetsInlineLimit: 4096
  },
  // 开发服务器配置
  server: {
    port: 3000,
    open: true
  }
})
