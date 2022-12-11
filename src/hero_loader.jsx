import React, { useEffect } from 'react'
import heroImage from './assets/hero_image.png'
import { motion, AnimatePresence } from 'framer-motion'
import { heroImgY, heroImgWidth, heroImgHeight } from './HeroImageDimensions'

export default function HeroLoader() {
  return (
    <div
      layoutId='main-image-1'
      className='flex flex-col justify-center items-center mt-24'
    >
      <motion.img
        src={heroImage}
        width='720px'
        height='640px'
        className='aspect-auto object-cover'
      />
    </div>
  )
}
