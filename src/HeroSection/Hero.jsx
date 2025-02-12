import React, { useEffect, useState } from 'react'
import HeroLoader from './hero_loader'
import { motion, AnimatePresence } from 'framer-motion'
import heroImage from '../assets/hero_image.avif'
import DesktopNavbar from '../Navbar/DesktopNav'
import { LetterAnimation } from './AnimatedCharacters'

export default function Hero() {
  const [loaded, setloaded] = useState(false)
  const [mobile, setmobile] = useState(false)
  const [heroDelay, setHeroDelay] = useState(0)

  const interpretViewport = () => {
    // for screen width below 1024px we do not want the Hero Image animation.
    // So we check the screen width and accordingly show either the motion.img
    // or just img tag
    // tailwind 5xl - 1024px

    if (window.innerWidth < 1024) {
      setHeroDelay(0)
      setmobile(true)
      setloaded(true)
    } else {
      setmobile(false)
      setTimeout(() => {
        setloaded(true)
      }, 1500)
      setHeroDelay(1.5)
    }
  }

  useEffect(() => {
    interpretViewport()
  }, [window.innerWidth])

  return (
    <>
      <AnimatePresence>
        {loaded ? (
          <>
            <DesktopNavbar />
            <div className='flex flex-col justify-center items-center'>
              <div className='w-full px-4 md:px-10 lg:mx-auto lg:max-w-6xl mt-10 '>
                <motion.div
                  initial={{
                    visibility: 'hidden',
                  }}
                  animate={{
                    visibility: 'visible',
                    transition: {
                      delay: heroDelay,
                    },
                  }}
                  className='flex flex-col justify-center items-start lg:flex-row lg:justify-between lg:items-end'
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                      transition: {
                        delay: heroDelay,
                        staggerChildren: 1,
                      },
                    }}
                    className='flex flex-row flex-wrap gap-2 font-header font-semibold text-4xl lg:text-[5rem] lg:w-[90rem] leading-normal break-words'
                  >
                    {'Jay Shree Krishna Consultants'
                      .split(' ')
                      .map((word, index) => (
                        <LetterAnimation
                          key={word + index}
                          elemKey={word + index}
                          text={word}
                        />
                      ))}
                  </motion.div>
                  <motion.p
                    initial={{
                      visibility: 'hidden',
                      opacity: 0,
                    }}
                    animate={{
                      visibility: 'visible',
                      opacity: 1,
                      transition: {
                        delay: heroDelay + 1,
                        duration: 0.3,
                        type: 'ease',
                      },
                    }}
                    className='font-body lg:w-[45rem] font-sans break-words tracking-wide text-left lg:text-right lg:mb-8 mt-10 lg:mt-0'
                  >
                    Lorem ipsum dolor sit amet consectetur. Auctor neque neque
                    magna at faucibus. Quam malesuada sit proin non purus est
                    luctus.
                  </motion.p>
                </motion.div>
                <motion.p
                  initial={{
                    visibility: 'hidden',
                    opacity: 0,
                  }}
                  animate={{
                    visibility: 'visible',
                    opacity: 1,
                    transition: {
                      delay: heroDelay + 1,
                      duration: 0.3,
                      type: 'ease',
                    },
                  }}
                  className='mt-12 w-fit place-self-start hover:underline hover:underline-offset-2 hover:text-accent-red transition duration-300'
                >
                  <a href='#gallery' >See our Projects</a>
                </motion.p>
              </div>

              {/* Animating the Hero Image on lg and above since it does not look 
                    good on mobiles
                    tailwind 5xl - 1024px
                */}
              {mobile ? (
                <img src={heroImage} className='mt-24' />
              ) : (
                <motion.img
                  layoutId='main-image-1'
                  initial={{
                    y: -100, // -100 look great, -300 gives proper animation
                    width: 720,
                    height: 480,
                  }}
                  animate={{
                    y: 100,
                    width: '100%',
                    height: 720,
                    transition: {
                      duration: heroDelay,
                      ease: [0.6, 0.1, -0.05, 0.9],
                    },
                  }}
                  src={heroImage}
                  className='aspect-auto object-cover max-w-[120rem]'
                />
              )}
            </div>
          </>
        ) : (
          <HeroLoader setImageLoaded={setloaded} />
        )}
      </AnimatePresence>
    </>
  )
}
