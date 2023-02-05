import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function PrincipleItem({ header, description, borderBottom }) {
  const [nodeRef, inView] = useInView({
    delay: 200,
    triggerOnce: true,
  })

  const container = {
    hidden: { opacity: 0 },
    visible: inView
      ? {
          opacity: 1,
          transition: {
            delay: 0.3,
            when: 'beforeChildren',
            staggerChildren: 1,
          },
        }
      : {},
  }

  return (
    <div ref={nodeRef}>
      <motion.div variants={container} initial='hidden' animate='visible'>
        <motion.div className='h-[0.1px] w-full bg-accent-gray'></motion.div>
        <motion.div className='py-8 lg:px-10 flex flex-col lg:flex-row justify-start items-start lg:items-center'>
          <motion.h1 className='font-body text-3xl lg:w-2/5 lg:pr-10 tracking-wide'>
            {header}
          </motion.h1>
          <motion.p className='font-body text-accent-gray mt-2 lg:w-3/5 break-words'>
            {description}
          </motion.p>
        </motion.div>
        {borderBottom ? (
          <motion.div className='h-[0.1px] w-full bg-accent-gray'></motion.div>
        ) : null}
      </motion.div>
    </div>
  )
}
