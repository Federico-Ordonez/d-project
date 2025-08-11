import { defineConfig } from 'vite'
import { resolve } from 'path'
import shopify from 'vite-plugin-shopify'

export default defineConfig({
  plugins: [shopify({ themeRoot: '.', sourceCodeDir: 'src' })],
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    manifest: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.js'),
        style: resolve(__dirname, 'src/style.css'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  server: {
    host: true,
    port: 3000,
  },
})
