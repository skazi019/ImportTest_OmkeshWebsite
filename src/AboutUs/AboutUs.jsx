import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Metric from './Metric'

export default function AboutUs() {
  const [loaded, setloaded] = useState(false)
  const [mobile, setmobile] = useState(false)
  const [heroDelay, setHeroDelay] = useState(0)

  const interpretViewport = () => {
    // for screen width below 1024px we do not want the Hero Image animation.
    // So we check the screen width and accordingly show either the motion.img
    // or just img tag
    // tailwind 5xl - 1024px
    // if (window.innerWidth < 1024) {
    //   setHeroDelay(0)
    //   setmobile(true)
    //   setloaded(true)
    // } else {
    //   setHeroDelay(1.5)
    //   setmobile(false)
    //   // to make the loader image animate
    //   setTimeout(() => {
    //     setloaded(true)
    //   }, 2000)
    // }
  }

  useEffect(() => {
    interpretViewport()
  }, [window.innerWidth])

  return (
    <>
      <section className='mt-32 lg:mt-60 h-auto w-screen w-full px-4 md:px-10 lg:mx-auto lg:max-w-6xl'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-0 justify-start items-start'>
          <h1 className='lg:w-1/2 font-header font-semibold text-5xl leading-normal break-words'>
            About Us
          </h1>
          <div className='lg:w-1/2 flex flex-col gap-28 justify-center items-center'>
            <p className='mt-3 font-body text-left tracking-wide'>
              Lorem ipsum dolor sit amet consectetur. Sed faucibus at vitae
              lobortis neque morbi ultrices pellentesque mauris. Cras porta
              porttitor maecenas arcu tincidunt. Nibh vestibulum consectetur at
              lectus in. Felis tincidunt sem id phasellus quam egestas id felis
              at.
            </p>
            <div className='flex flex-col gap-24 justify-center items-center'>
              <div className='flex flex-row gap-24 justify-center items-center'>
                <Metric number={50} text={'Designs made'} addPlus={true} />
                <Metric number={38} text={'Projects Delivered'} addPlus={true} />
              </div>
              <div className='flex flex-row gap-24 justify-center items-center'>
                <Metric number={15} text={'Clients Impacted'} addPlus={true} />
                <Metric number={3} text={'Awards Won'} addPlus={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
