import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Faq from './components/Faq'
import Footer from './components/Footer'
import ProgramHighlights from './components/ProgramHighlights'

const App = () => {
  return (
    <div className='relative h-screen '>
      <div className="fixed top-0 bottom-0 right-0 left-0 bg-violet-200 -z-20"></div>
      <Navbar/>
      <Hero/>
      <ProgramHighlights/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
