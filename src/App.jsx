import React from 'react'
import Menu from './components/Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sistema from './components/Sistema'
import Resultados from './components/Resultados'
import Nosotros from './components/Nosotros'
import Info from './components/Info'
import Contacto from './components/Contacto'
import Inicio from './components/Inicio'

const App = () => {
  return (
    <>
        <Menu/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sistema" element={<Sistema />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
    </>
  )
}

export default App