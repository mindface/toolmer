import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import process from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ELECTRON=="true" ? './' : '.',
  resolve: {
    alias: {
      '@': path.resolve('__dirname','/src'),
      crypto: 'crypto-js'
    }
  },
  build: {
    outDir: 'docs'
  },
  plugins: [
    vue(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
  server: {
    host: true,
    port: 3004,
  },
})
