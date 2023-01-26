import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion, AnimatePresence } from 'framer-motion'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function GalleryItem({ description, imageURL }) {
  // const [loaded, setLoaded] = useState(false)
  // console.log('Image load status: ', loaded)

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          transition: {
            duration: 0.5,
            type: 'ease',
          },
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
            type: 'ease',
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 1,
            type: 'ease',
          },
        }}
        className='mt-14 flex flex-col justify-center items-start'
      >
        <p className='font-body text-lg tracking-wide text-accent-gray'>
          {description}
        </p>
        <img
          src={imageURL}
          className='mt-10 w-full h-auto lg:h-[32rem] object-cover rounded'
        />
        {/*
        <div className='mt-10 w-full h-auto lg:h-[32rem] object-cover rounded'>
          <LazyLoadImage
            src={imageURL} // use normal <img> attributes as props
            effect='blur'
          />
        </div>
        */}
      </motion.div>
    </AnimatePresence>
  )
}
