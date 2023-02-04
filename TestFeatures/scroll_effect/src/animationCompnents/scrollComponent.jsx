import React from 'react'
import dividerImage from '../assets/unsplash_dpRXF9-4tQc.png'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ScrollAnimation(props) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(
    scrollYProgress,
    props.animationBreakpoints,
    props.speedBreakpoints
  )

  return <motion.div style={{ y }}>{props.children}</motion.div>
}

export default function ScrollTest() {
  return (
    <>
      <div className='bg-black'>
        <div className='max-w-5xl mx-auto h-[1080px] flex justify-center items-center'>
          <div className='w-auto flex flex-col justify-left items-center'>
            <ScrollAnimation
              animationBreakpoints={[0, 1]}
              speedBreakpoints={[0, 100 * -0.2]}
            >
              <h1 className='font-serif text-white text-5xl mb-4'>About Us</h1>
            </ScrollAnimation>
            <ScrollAnimation
              animationBreakpoints={[0, 1]}
              speedBreakpoints={[0, 100 * -0.5]}
            >
              <img src={dividerImage} className='w-96 mb-4' />
            </ScrollAnimation>
            <ScrollAnimation
              animationBreakpoints={[0, 1]}
              speedBreakpoints={[0, 100 * -0.2]}
            >
              <p className='font-sans text-white w-96'>
                Lorem ipsum dolor sit amet consectetur. Sed faucibus at vitae
                lobortis neque morbi ultrices pellentesque mauris. Cras porta
                porttitor maecenas arcu tincidunt. Nibh vestibulum consectetur
                at lectus in. Felis tincidunt sem id phasellus quam egestas id
                felis at.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  )
}
