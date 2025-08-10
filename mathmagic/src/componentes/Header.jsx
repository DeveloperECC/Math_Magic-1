import React from 'react'

export default function Encabezado() {
  // Componente simple de encabezado
  return (
    <header className="encabezado">
      {/* Título principal con efecto mágico */}
      <h1> <img src="public/apple-touch-icon.png" alt="" />✨ MathMagic ✨</h1>
      <p>Aprende matemáticas con trucos, juegos y magia</p>
    </header>
  )
}