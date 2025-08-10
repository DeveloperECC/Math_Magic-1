import React, { useState } from 'react'

export default function MultiplicacionMagica() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [mensaje, setMensaje] = useState('')

  function calcularMultiplicacion() {
    const res = Number(a) * Number(b)
    if (!Number.isFinite(res)) {
      setMensaje('Por favor ingresa números válidos')
      return
    }
    // Ejemplo de patrón visual: si ambos son 5, es 25 (simetría)
    setMensaje(`Resultado: ${res}`)
  }

  return (
    <section>
      <h2>✨ Multiplicación Sorprendente</h2>
      <p>Descubre patrones visuales y tablas con ritmo.</p>

      <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="Multiplicando" />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="Multiplicador" />
      <div className="acciones">
        <button onClick={calcularMultiplicacion}>Multiplicar</button>
      </div>

      <p className="resultado">{mensaje}</p>
    </section>
  )
}