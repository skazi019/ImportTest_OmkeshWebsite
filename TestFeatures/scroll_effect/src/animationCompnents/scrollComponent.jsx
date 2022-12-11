import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollAnimation(props) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(
    scrollYProgress,
    props.animationBreakpoints,
    props.speedBreakpoints
  )

  return <motion.div style={{ y }}>{props.children}</motion.div>
}
