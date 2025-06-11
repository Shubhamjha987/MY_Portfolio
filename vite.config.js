import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Set the repo name below
const repoName = 'MY_Portfolio' // 🚨 Must match your GitHub repo name

export default defineConfig({
  base: `/${repoName}/`, // 👈 REQUIRED for GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
