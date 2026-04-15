'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function Cursor() {
  const [isHovering, setIsHovering] = useState<'default' | 'button' | 'text'>('default')
  const [isVisible, setIsVisible] = useState(false)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  const springConfig = { stiffness: 300, damping: 28, mass: 0.5 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const onMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
      x.set(e.clientX)
      y.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a, [data-cursor="button"]')) {
        setIsHovering('button')
      } else if (target.closest('p, h1, h2, h3, span, [data-cursor="text"]')) {
        setIsHovering('text')
      } else {
        setIsHovering('default')
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.body.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.body.style.cursor = ''
    }
  }, [x, y, isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: x,
        top: y,
        x: '-50%',
        y: '-50%',
        width: 28,
        height: 28,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.45)',
        background: 'transparent',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 99999,
      }}
    />
  )
}
