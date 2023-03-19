import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet } from 'react-helmet'

import SEO from './SEO.jsx'
import Hero from './HeroSection/Hero'
import AboutUs from './AboutUs/AboutUs.jsx'
import Principles from './Principles/Principles.jsx'
import Gallery from './Gallery/Gallery'
// import Founders from './Founders/Founders'
import Founders from './Founders/Founders_v2'
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
      <SEO />
      <Hero />
      <AboutUs />
      <Principles />
      <Gallery />
      <Founders />
      <Partners />
      <Contact />
    </main>
  </React.StrictMode>
)
