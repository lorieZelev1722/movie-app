import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: ' https://loriezelev1722.github.io/',
  plugins: [react()],
})
