import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion, AnimatePresence } from 'framer-motion'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function GalleryItem({ description, imageURL }) {
  // const [loaded, setLoaded] = useState(false)
  console.log(`Image url: ../assets/${imageURL}`)

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
        className='mt-14 flex flex-col justify-center items-start h-[30rem] md:h-[38rem] lg:h-[42rem]'
      >
        <p className='font-body text-lg tracking-wide text-accent-gray'>
          {description}
        </p>
        <img
          src={`/gallery/`+imageURL}
          className='mt-10 w-full h-[25rem] md:h-[32rem] lg:h-[35rem] object-cover rounded'
        />
      </motion.div>
    </AnimatePresence>
  )
}
