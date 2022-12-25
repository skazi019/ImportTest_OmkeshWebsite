import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './HeroSection/Hero'
import AboutUs from './AboutUs/AboutUs.jsx'
import Principles from './Principles/Principles.jsx'
import Founders from './Founders/Founders'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='bg-black text-white'>
      <Hero />
      <AboutUs />
      <Principles />
      <Founders />
    </main>
  </React.StrictMode>
)
