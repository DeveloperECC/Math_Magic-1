import React from 'react'
// Componente reutilizable: tarjeta que actúa como botón para cambiar de módulo
export default function TarjetaJuego({ titulo, onClick }) {
  return (
    <button className="tarjeta-juego" onClick={onClick} aria-label={titulo}>
      <div className="tarjeta-contenido">
        <h3>{titulo}</h3>
      </div>
    </button>
  )
}