import React, { useEffect } from 'react'
import heroImage from '../assets/hero_image.avif'
import { motion } from 'framer-motion'

export default function HeroLoader({ setImageLoaded }) {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <motion.img
        layoutId='main-image-1'
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.9],
          },
        }}
        src={heroImage}
        width='720px'
        height='640px'
        className='hidden lg:block aspect-auto object-cover'
        // onLoad={() => setImageLoaded(true)}
      />
    </div>
  )
}
