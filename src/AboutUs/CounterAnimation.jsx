import { animate, useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React, { useEffect, useRef } from 'react'

export default function Counter({ from, to }) {
  const nodeRef = useRef()

  useEffect(() => {
    const node = nodeRef.current

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed(0)
      },
    })
    return () => controls.stop()
  }, [from, to])

  return <p ref={nodeRef} />
}
