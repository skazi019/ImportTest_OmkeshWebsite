import React, { useEffect, useState } from 'react'
import HeroLoader from './hero_loader'
import { motion, AnimatePresence } from 'framer-motion'
import heroImage from '../assets/hero_image.png'
import DesktopNavbar from '../Navbar/DesktopNav'

export default function Hero() {
  const [loaded, setloaded] = useState(false)
  const [imageLoaded, setimageLoaded] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloaded(true)
    }, 2000)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loaded ? (
          <>
            <DesktopNavbar />
            <div className='flex flex-col justify-center items-center'>
              <div className='w-full px-4 md:px-10 lg:mx-auto lg:max-w-6xl mt-10 flex flex-row justify-between items-end'>
                {imageLoaded ? (
                  <>
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
                      className='font-serif font-semibold text-5xl lg:text-[5rem] lg:w-[90rem] lg:leading-normal'
                    >
                      Jay Shree Krishna Consultants
                    </motion.h1>
                    <motion.p
                      initial={{
                        visibility: 'hidden',
                      }}
                      animate={{
                        visibility: 'visible',
                        transition: {
                          delay: 1,
                        },
                      }}
                      className='w-[45rem] font-sans break-word text-right'
                    >
                      Lorem ipsum dolor sit amet consectetur. Auctor neque neque
                      magna at faucibus. Quam malesuada sit proin non purus est
                      luctus.
                    </motion.p>
                  </>
                ) : null}
              </div>
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
                className='aspect-auto object-cover'
              />
              <div className='h-screen'></div>
            </div>
          </>
        ) : (
          <HeroLoader />
        )}
      </AnimatePresence>
    </>
  )
}
