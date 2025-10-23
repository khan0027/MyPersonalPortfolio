import React from 'react'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skills from './pages/Skills'

const App = () => {
  return (
    <div className='bg-gray-100 h-screen ' >
      <Navbar />

      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/about' element ={<About />} />
        <Route path='/projects' element ={<Projects />} />
        <Route path='/skills' element ={<Skills />} />
        <Route path='/contact-me' element ={<Contact />} />
      </Routes>
    </div>
  )
}

export default App