import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function FoundingMember({
  name,
  image,
  description,
  extraClasses,
}) {
  const [mobile, setmobile] = useState(false)
  const interpretViewport = () => {
    // for screen width below 1024px we do not want the Hero Image animation.
    // So we check the screen width and accordingly show either the motion.img
    // or just img tag
    // tailwind 5xl - 1024px

    if (window.innerWidth < 1024) {
      setmobile(true)
    } else {
      setmobile(false)
    }
  }

  useEffect(() => {
    interpretViewport()
  }, [window.innerWidth])

  return (
    <div className={`group relative ${extraClasses}`}>
      <img src={image} className='' />
      <div className='absolute left-4 bottom-8'>
        <h1 className='font-header text-5xl'>{name}</h1>
        <p className={mobile ? 'block mt-4' : 'hidden group-hover:block mt-4'}>
          Lorem ipsum dolor sit amet consectetur. Sed faucibus at vitae lobortis
          neque morbi ultrices pellentesque mauris.
        </p>
      </div>
    </div>
  )
}
