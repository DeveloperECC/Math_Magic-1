import React, { useState } from 'react'

export default function DivisionMagica() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [mensaje, setMensaje] = useState('')

  function calcularDivision() {
    const divisor = Number(b)
    if (divisor === 0) {
      setMensaje('No se puede dividir por cero')
      return
    }
    const res = Number(a) / divisor
    if (!Number.isFinite(res)) {
      setMensaje('Por favor ingresa números válidos')
      return
    }
    setMensaje(`Resultado: ${res}`)
  }

  return (
    <section>
      <h2>🔢 División Fácil</h2>
      <p>Enfoque por reparto gráfico y pasos claros.</p>

      <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="Dividendo" />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="Divisor" />
      <div className="acciones">
        <button onClick={calcularDivision}>Dividir</button>
      </div>

      <p className="resultado">{mensaje}</p>
    </section>
  )
}