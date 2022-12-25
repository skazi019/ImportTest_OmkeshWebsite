import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './HeroSection/Hero'
import AboutUs from './AboutUs/AboutUs.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='bg-black text-white'>
      <Hero />
      <AboutUs />
    </main>
  </React.StrictMode>
)
