import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"



import { Navbar } from '../componentes/Navbar'
import { Footer } from '../componentes/Footer'
import { Inicio } from '../componentes/Inicio'
import { Portafolio } from '../componentes/Portafolio'
import { Experiencia } from '../componentes/Experiencia'
import { Conoceme } from '../componentes/Conoceme'

export const Misrutas = () => {
  return (
    <BrowserRouter>
      {/* header y navegacion */}
      <Navbar></Navbar>
      {/* contenido central */}
      <section className='contenido' >
        <Routes>
          <Route path='/inicio' element={<Inicio></Inicio>} ></Route>
          <Route path='/portafolio' element={<Portafolio></Portafolio>} ></Route>
          <Route path='/experiencia' element={<Experiencia></Experiencia>} ></Route>
          <Route path='/conoceme' element={<Conoceme></Conoceme>} ></Route>
        </Routes>
      </section>
      {/* footer */}
      <Footer></Footer>
    </BrowserRouter>
  )
}
