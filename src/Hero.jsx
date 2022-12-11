import React, { useEffect, useState } from 'react'
import HeroLoader from './hero_loader'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import heroImage from './assets/hero_image.png'
import { heroImgY, heroImgWidth, heroImgHeight } from './HeroImageDimensions'

export default function Hero() {
  const [loaded, setloaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setloaded(true)
    }, 2000)
  }, [])

  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {loaded ? (
          <div className='flex flex-col justify-center items-center'>
            <motion.h1
              initial={{
                visibility: 'hidden',
              }}
              animate={{
                visibility: 'visible',
                transition: {
                  delay: 1,
                },
              }}
              className='text-5xl font-bold mt-10'
            >
              Jay Shree Krishna Consultants
            </motion.h1>
            <motion.img
              layoutId='main-image-1'
              initial={{
                y: 0,
                width: 720,
                height: 480,
              }}
              animate={{
                y: 200,
                width: '100%',
                height: 720,
                transition: {
                  duration: 1,
                  ease: [0.6, 0.01, -0.05, 0.9],
                },
              }}
              src={heroImage}
              className='aspect-auto mt-2 object-cover'
            />
            <div className='h-screen'></div>
          </div>
        ) : (
          <HeroLoader />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
