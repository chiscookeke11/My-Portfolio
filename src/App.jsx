import React from 'react'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Works from './components/Works'

const App = () => {
  return (
    <div className='bg-[#030712] w-full h-auto ' >
      
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Works/>
      </div>
  )
}

export default App