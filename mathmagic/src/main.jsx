import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// Importar estilos globales
import './estilos/variables.css'
import './estilos/estilos.css'

// Crear el root y renderizar la App
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)