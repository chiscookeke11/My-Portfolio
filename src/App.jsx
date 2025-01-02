import React from 'react'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Works from './components/Works'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-[#030712] w-full h-auto ' >
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Works/>
      <Testimonials/>
      <Footer/>
      </div>
  )
}

export default App