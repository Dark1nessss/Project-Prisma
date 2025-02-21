"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768

    if (isMobile) {
      if (cursorRef.current) cursorRef.current.style.display = "none"
      if (cursorDotRef.current) cursorDotRef.current.style.display = "none"
      document.body.style.cursor = "auto"
      return
    }

    // Hide default cursor
    document.body.style.cursor = "none"

    // Add cursor styles for clickable elements
    const style = document.createElement("style")
    style.textContent = `
      a, button, input, select, textarea, [role="button"] {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      const target = e.target as HTMLElement
      const isClickable = target.closest('a, button, input, select, textarea, [role="button"]')
      setIsPointer(!!isClickable)
    }

    const onMouseEnter = () => setIsHovered(true)
    const onMouseLeave = () => setIsHovered(false)

    const clickableElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]')
    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseEnter)
      element.addEventListener("mouseleave", onMouseLeave)
    })

    window.addEventListener("mousemove", onMouseMove)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseEnter)
        element.removeEventListener("mouseleave", onMouseLeave)
      })
      document.body.style.cursor = "auto"
      document.head.removeChild(style)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        ref={cursorRef}
        style={{
          left: springX,
          top: springY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.9 : 0.7,
        }}
        className="pointer-events-none fixed z-50 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 md:block"
      >
        {/* Main cursor ring */}
        <div className="absolute inset-0 rounded-full border-2 border-yellow-400/80">
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-[2px]" />
        </div>

        {/* Centered dot */}
        <motion.div
          animate={{
            scale: isHovered ? 0.5 : 1,
            opacity: isHovered ? 1 : 0.9,
          }}
          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400"
        >
          {/* Dot glow */}
          <div className="absolute inset-0 rounded-full bg-yellow-400/70 blur-[2px]" />
        </motion.div>

        {/* Animated corners for hover state */}
        {isPointer && (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -left-1 -top-1 h-2 w-2 border-l-2 border-t-2 border-yellow-400"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -right-1 -top-1 h-2 w-2 border-r-2 border-t-2 border-yellow-400"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -bottom-1 -left-1 h-2 w-2 border-b-2 border-l-2 border-yellow-400"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2 border-yellow-400"
            />
          </>
        )}

        {/* Additional glow layer */}
        <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.4)]" />
      </motion.div>
    </>
  )
}