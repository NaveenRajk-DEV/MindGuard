import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    
  ],
  server: {
    port: 5173, 
    proxy: {
      "/api": {
<<<<<<< HEAD
        target: "http://localhost:4000",
=======
        target: "http://localhost:5001",
>>>>>>> 233874662a4fd5fdf88e451938f8647a5dacdfd0
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  
})
