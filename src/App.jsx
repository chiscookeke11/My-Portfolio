import React from 'react'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Works from './components/Works'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Navbar from './components/Navbar'

const App = ({darkMode, toggleMode}) => {
  return (
    <div className= {` w-full h-auto transition duration-300 ease-in-out  ${darkMode? "bg-[#030712]" : "bg-white" } `} >
      <Navbar darkMode={darkMode} toggleMode={toggleMode}  />
      <Hero darkMode={darkMode}/>
      <AboutMe darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Experience darkMode={darkMode}/>
      <Works darkMode={darkMode}/>
      <Testimonials darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
      </div>
  )
}

export default App