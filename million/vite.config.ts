import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import MillionCompiler from '@million/lint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), MillionCompiler.vite(), react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
