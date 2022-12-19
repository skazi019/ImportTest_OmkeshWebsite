import heroImage from '../assets/hero_image.png'
import { motion } from 'framer-motion'

export default function HeroLoader() {
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
        className='aspect-auto object-cover'
      />
    </div>
  )
}
