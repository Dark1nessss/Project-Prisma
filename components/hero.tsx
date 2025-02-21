"use client"

import { motion, AnimatePresence } from "framer-motion"
import MagneticLink from "./magnetic-link"
import { useEffect, useState } from "react"

const images = [
  "https://i.pinimg.com/originals/14/f4/35/14f435eaaf8d107cca5055ce150eaf47.gif",
  "https://64.media.tumblr.com/db8472cfbb89a155148003b053d5f3de/4d6d987e0cee7307-8e/s400x225/158142e8e876044a6191733a02f6ee5ac1643b58.gif",
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat opacity-70"
              style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 flex h-full items-center justify-center px-4"
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-display text-4xl font-bold tracking-wider text-white sm:text-6xl md:text-7xl lg:text-9xl"
          >
            YELLOW
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="block text-yellow-400"
            >
              PRISM
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-4 text-base tracking-[0.2em] text-white/80 sm:text-lg md:text-xl"
          >
            COMMERCIAL & EVENT PHOTOGRAPHY
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="mt-6 sm:mt-8"
          >
            <MagneticLink
              href="#contact"
              className="rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-yellow-300 sm:px-8 sm:py-3"
            >
              Get in Touch
            </MagneticLink>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="h-16 w-[1px] bg-gradient-to-b from-yellow-400/0 to-yellow-400"
        />
      </motion.div>
    </section>
  )
}