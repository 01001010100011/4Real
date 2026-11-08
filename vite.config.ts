import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // base relativa: lo stesso build funziona su github.io/4Real/ e sul dominio custom in root
  base: command === 'build' ? './' : '/',
  plugins: [react()],
}))
