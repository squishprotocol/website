import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Values from './Components/Values'
import Faq from './Components/Faq'
import Timeline from './Components/Timeline'
import Footer from './Components/Footer'


function App() {
 
  return (
    <>
    <Navbar/>
    <Hero/>
    <Values/>
    <Timeline/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default App
