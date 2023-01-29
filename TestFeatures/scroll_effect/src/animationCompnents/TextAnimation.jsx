import React from 'react'
import { motion } from 'framer-motion'

export default function TextAnimationTesting({ text }) {
  return (
    <>
      <div className='bg-black'>
        <div className='max-w-5xl mx-auto h-screen flex justify-center items-center'>
          <div className='w-auto flex flex-col justify-left items-center'>
            <WordAnimation text={text} />
          </div>
        </div>
      </div>
    </>
  )
}

const LetterAnimation = ({ text }) => {
  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: -30,
      transition: {
        type: 'ease',
        damping: 20,
        stiffness: 50,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
      transition: {
        type: 'ease',
        damping: 20,
        stiffness: 50,
      },
    },
  }

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
      className='flex text-5xl text-white'
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

const WordAnimation = ({ text }) => {
  const wordArray = text.split(' ')

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { staggerChildren: 1 },
      }}
      className='flex flex-row flex-wrap gap-2'
    >
      {wordArray.map((word, index) => (
        <LetterAnimation text={word} />
      ))}
    </motion.div>
  )
}
