import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // This makes the server accessible from your local machine.
    port: 5173, // Explicitly set the port.
    watch: {
      usePolling: true, // This helps file change detection work reliably inside Docker.
    },
  },
})
