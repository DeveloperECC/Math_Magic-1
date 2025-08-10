import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'MathMagic',
        short_name: 'MathMagic',
        description: 'Aprende matemáticas de forma mágica y divertida',
        theme_color: '#4CAF50',
        icons: [
          { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ]
      }
    })
  ],
  server: {
    ort: 5174,
    open: true // Cambio el puerto para evitar conflictos
  }
})
