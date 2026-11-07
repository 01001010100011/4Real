import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Su GitHub Pages il sito è servito sotto /<nome-repo>/: GITHUB_REPOSITORY esiste solo in Actions
  base: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/',
  plugins: [react()],
})
