import React from 'react'

export default function Inicio({ cambiarPagina }) {
  return (
    <section>
      <h2>Bienvenido a MathMagic</h2>
      <p>Elige un juego para empezar a aprender con magia ✨</p>

      {/* Ejemplo: botón para ir directamente a Suma Mágica */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => cambiarPagina('suma')}>Ir a Suma Mágica</button>
        <button onClick={() => cambiarPagina('multi')}>Ir a Multiplicación</button>
      </div>
    </section>
  )
}