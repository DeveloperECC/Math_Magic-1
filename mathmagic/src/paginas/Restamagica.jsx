import React, { useState } from 'react'

export default function RestaMagica() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [mensaje, setMensaje] = useState('')

  function calcularResta() {
    const resultado = Number(a) - Number(b)
    if (!Number.isFinite(resultado)) {
      setMensaje('Por favor ingresa números válidos')
      return
    }
    setMensaje(`La resta es ${resultado}`)
  }

  return (
    <section>
      <h2>🪄 Resta Visual</h2>
      <p>Usa métodos gráficos en tu imaginación para restar fácilmente.</p>

      <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="Minuendo" />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="Sustraendo" />
      <div className="acciones">
        <button onClick={calcularResta}>Restar</button>
      </div>

      <p className="resultado">{mensaje}</p>
    </section>
  )
}