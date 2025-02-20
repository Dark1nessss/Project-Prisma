"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  width?: "100%" | "fit-content"
  animation?: "fade" | "slide" | "scale" | "rotate"
  delay?: number
  duration?: number
  once?: boolean
}

export default function ScrollReveal({
  children,
  width = "fit-content",
  animation = "fade",
  delay = 0,
  duration = 0.5,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-100px" })
  const controls = useAnimation()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Transform values based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100])

  const getAnimationVariants = () => {
    switch (animation) {
      case "slide":
        return {
          hidden: { opacity: 0, y: 75, scale: 0.95 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 200,
              duration,
              delay,
            },
          },
        }
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 200,
              duration,
              delay,
            },
          },
        }
      case "rotate":
        return {
          hidden: { opacity: 0, rotate: -15, scale: 0.95 },
          visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 200,
              duration,
              delay,
            },
          },
        }
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        }
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={ref} style={{ width }} className="relative">
      <motion.div
        variants={getAnimationVariants()}
        initial="hidden"
        animate={controls}
        style={{
          opacity,
          scale,
          y,
        }}
        className="relative"
      >
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -inset-1 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />
          <div className="absolute inset-y-0 -left-px w-px bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent" />
          <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent" />
        </div>

        {children}
      </motion.div>
    </div>
  )
}