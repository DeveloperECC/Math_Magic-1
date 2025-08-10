import React, { useState } from 'react'

export default function SumaMagica() {
  // Estados para los dos operandos y para el mensaje de resultado
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [mensaje, setMensaje] = useState('')

  // Función que suma — usa conversión Number y condicionales
  function calcularSuma() {
    const suma = Number(a) + Number(b) // operador + para sumar

    // Ejemplo de truco: si suma es 10 destacamos como "número mágico"
    if (!Number.isFinite(suma)) {
      setMensaje('Por favor ingresa números válidos')
      return
    }

    if (suma === 10) {
      setMensaje('🎉 ¡Perfecto! Llegaste a 10 — número mágico ✨')
    } else {
      setMensaje(`La suma es ${suma}`)
    }
  }

  // Generador simple de ejemplos aleatorios (arrays + bucle)
  function ejemploAleatorio() {
    const ejemplos = [
      [2, 3],
      [4, 6],
      [7, 3],
      [5, 5]
    ]
    // Elegir índice aleatorio
    const idx = Math.floor(Math.random() * ejemplos.length)
    setA(exemplos[idx][0])
    setB(exemplos[idx][1])
    setMensaje('Prueba con este ejemplo y pulsa "Sumar"')
  }

  return (
    <section>
      <h2>🔮 Suma Mágica</h2>
      <p>Introduce dos números y descubre trucos para sumar rápido.</p>

      <div className="form-row">
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="Número A" />
        <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="Número B" />
      </div>

      <div className="acciones">
        <button onClick={calcularSuma}>Sumar</button>
        <button onClick={ejemploAleatorio}>Ejemplo aleatorio</button>
      </div>

      <p className="resultado">{mensaje}</p>
    </section>
  )
}