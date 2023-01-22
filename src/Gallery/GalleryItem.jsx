import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GalleryItem({ description, imageURL }) {
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
        <img src={imageURL} className='mt-10 w-full h-[32rem] object-cover' />
      </motion.div>
    </AnimatePresence>
  )
}
