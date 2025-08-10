import React, { useState } from 'react'

export default function Razonamiento() {
  const [pregunta, setPregunta] = useState('')
  const [mensaje, setMensaje] = useState('')

  // Generador de problema simple (funciones, arrays)
  function generarProblema() {
    const problemas = [
      'Si tienes 3 manzanas y te dan 4 más, ¿cuántas tienes?',
      'Si repartes 12 caramelos entre 3 niños, ¿cuántos recibe cada uno?'
    ]
    const idx = Math.floor(Math.random() * problemas.length)
    setPregunta(problemas[idx])
    setMensaje('')
  }

  function resolver(respuesta) {
    // Validación simplificada de ejemplo
    if (respuesta.trim() === '') {
      setMensaje('Escribe una respuesta')
      return
    }
    setMensaje('¡Buena respuesta! Analiza si es correcta y explica por qué.')
  }

  return (
    <section>
      <h2>🧠 Razonamiento Matemático</h2>
      <p>{pregunta || 'Pulsa generar para obtener un problema'}</p>
      <div className="acciones">
        <button onClick={generarProblema}>Generar problema</button>
      </div>
      <input placeholder="Escribe tu respuesta" onBlur={(e) => resolver(e.target.value)} />
      <p>{mensaje}</p>
    </section>
  )
}