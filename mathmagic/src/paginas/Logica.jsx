import React, { useState } from 'react'

export default function Logica() {
  // Mini juego de lógica: ordenar pasos
  const pasosCorrectos = [1, 2, 3]
  const [secuencia, setSecuencia] = useState([])
  const [mensaje, setMensaje] = useState('')

  function agregar(numero) {
    // Agrega número a la secuencia (array + funciones)
    setSecuencia((prev) => [...prev, numero])
  }

  function comprobar() {
    // Comparar arrays (bucle + condicionales)
    if (secuencia.length !== pasosCorrectos.length) {
      setMensaje('Faltan pasos')
      return
    }
    for (let i = 0; i < pasosCorrectos.length; i++) {
      if (secuencia[i] !== pasosCorrectos[i]) {
        setMensaje('No está correcto, intenta otra vez')
        return
      }
    }
    setMensaje('¡Correcto! Has completado la secuencia')
  }

  return (
    <section>
      <h2>🧩 Lógica Divertida</h2>
      <p>Ordena los pasos en la secuencia correcta.</p>
      <div className="botones-logica">
        <button onClick={() => agregar(1)}>Paso 1</button>
        <button onClick={() => agregar(2)}>Paso 2</button>
        <button onClick={() => agregar(3)}>Paso 3</button>
      </div>
      <div>
        <button onClick={comprobar}>Comprobar</button>
      </div>
      <p>{mensaje}</p>
      <p>Secuencia actual: [{secuencia.join(', ')}]</p>
    </section>
  )
}