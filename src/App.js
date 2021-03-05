import React from 'react'
import './App.css'
import './App.scss'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import PortFolio from './components/Portfolio/PortFolio'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <div id="about">
        <About />
        <Skills />
      </div>
      <PortFolio />
      {/* <Contact /> */}
    </div>
  )
}

export default App
