// App principal — organiza la navegación simple entre módulos
import React, { useState } from 'react'
import Encabezado from './componentes/Encabezado'
import PiePagina from './componentes/PiePagina'
import TarjetaJuego from './componentes/TarjetaJuego'

// Importar páginas (componentes de cada módulo)
import SumaMagica from './paginas/SumaMagica'
import RestaMagica from './paginas/RestaMagica'
import MultiplicacionMagica from './paginas/MultiplicacionMagica'
import DivisionMagica from './paginas/DivisionMagica'
import Logica from './paginas/Logica'
import Razonamiento from './paginas/Razonamiento'
import Inicio from './paginas/Inicio'

export default function App() {
  // Estado para controlar qué página está activa
  const [pagina, setPagina] = useState('inicio')

  // Mapa de páginas para renderizar basado en el estado
  const paginas = {
    inicio: <Inicio cambiarPagina={setPagina} />,
    suma: <SumaMagica />,
    resta: <RestaMagica />,
    multi: <MultiplicacionMagica />,
    div: <DivisionMagica />,
    logica: <Logica />,
    razon: <Razonamiento />
  }

  return (
    <div className="app">
      {/* Encabezado visible siempre */}
      <Encabezado />

      {/* Menu principal simple con tarjetas */}
      <nav className="menu-principal">
        <TarjetaJuego titulo="Inicio" onClick={() => setPagina('inicio')} />
        <TarjetaJuego titulo="Suma Mágica" onClick={() => setPagina('suma')} />
        <TarjetaJuego titulo="Resta Visual" onClick={() => setPagina('resta')} />
        <TarjetaJuego titulo="Multiplicación" onClick={() => setPagina('multi')} />
        <TarjetaJuego titulo="División" onClick={() => setPagina('div')} />
        <TarjetaJuego titulo="Lógica" onClick={() => setPagina('logica')} />
        <TarjetaJuego titulo="Razonamiento" onClick={() => setPagina('razon')} />
      </nav>

      {/* Contenedor principal que renderiza la página actual */}
      <main className="contenedor-principal">{paginas[pagina]}</main>

      {/* Pie de página */}
      <PiePagina />
    </div>
  )
}