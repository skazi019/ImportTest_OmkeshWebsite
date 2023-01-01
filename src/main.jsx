import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './HeroSection/Hero'
import AboutUs from './AboutUs/AboutUs.jsx'
import Principles from './Principles/Principles.jsx'
import Founders from './Founders/Founders'
import Partners from './Partners/Partners'
import Contact from './Contact/Contact'
import './index.css'

// Scolling to the top so that the hero image animation is shown
window.onbeforeunload = () => {
  if (window.innerWidth > 1024) {
    window.scrollTo({ top: 0 })
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='bg-black text-white'>
      <Hero />
      <AboutUs />
      <Principles />
      <Founders />
      <Partners />
      <Contact />
    </main>
  </React.StrictMode>
)
