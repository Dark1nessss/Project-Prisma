"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function LoadingAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative flex flex-col items-center">
        {/* Loading progress bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute -top-20 h-[2px] w-40 origin-left bg-yellow-400"
        />

        {/* Loading text */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-28 text-sm tracking-[0.3em] text-yellow-400/50"
        >
          LOADING
        </motion.span>

        <div className="relative h-32 w-32">
          {/* Rotating circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0"
          >
            <div className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-yellow-400/30" />
            <div
              className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-yellow-400/30"
              style={{ transform: "rotate(45deg) translateY(-16px) translateX(0px)" }}
            />
            <div
              className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-yellow-400/30"
              style={{ transform: "rotate(90deg) translateY(-16px) translateX(0px)" }}
            />
            <div
              className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-yellow-400/30"
              style={{ transform: "rotate(135deg) translateY(-16px) translateX(0px)" }}
            />
            <div
              className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-yellow-400/30"
              style={{ transform: "rotate(180deg) translateY(-16px) translateX(0px)" }}
            />
            <div
              className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-yellow-400/30"
              style={{ transform: "rotate(225deg) translateY(-16px) translateX(0px)" }}
            />
            <div
              className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-yellow-400/30"
              style={{ transform: "rotate(270deg) translateY(-16px) translateX(0px)" }}
            />
            <div
              className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-yellow-400/30"
              style={{ transform: "rotate(315deg) translateY(-16px) translateX(0px)" }}
            />
          </motion.div>

          {/* Logo Text Animation */}
          <div className="relative h-full w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute inset-0"
            >
            <Image
              src="/Yellow_Prism_Text.png"
              alt="Yellow Prism Logo"
              fill
              className="object-contain"
            />
            </motion.div>

            {/* Shutter effect */}
            <motion.div
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute inset-0 origin-top bg-black"
            />
          </div>

          {/* Pulsing ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute -inset-4 rounded-full border border-yellow-400/30"
          />
        </div>

        {/* Photography-related words */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              opacity: [0, 0.1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-light tracking-wider text-yellow-400/20"
                style={{
                  transform: `rotate(${i * 30}deg) translateY(-120px)`,
                }}
              >
                {
                  [
                    "CAPTURE",
                    "MOMENT",
                    "FRAME",
                    "LIGHT",
                    "FOCUS",
                    "LENS",
                    "VISION",
                    "CREATE",
                    "STORY",
                    "IMAGE",
                    "SHUTTER",
                    "ART",
                  ][i]
                }
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

