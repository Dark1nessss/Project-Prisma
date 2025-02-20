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
      {/* Background gradient animation */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at center, rgba(250,204,21,0.03) 0%, transparent 70%)",
            "radial-gradient(circle at center, rgba(250,204,21,0.08) 0%, transparent 70%)",
            "radial-gradient(circle at center, rgba(250,204,21,0.03) 0%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      />

      <div className="relative flex flex-col items-center">
        {/* Top decorative elements */}
        <div className="absolute -top-32 flex w-full items-center justify-center">
          <motion.div
            animate={{
              width: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="h-[1px] bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
          />
        </div>

        {/* Loading progress bar with enhanced glow */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute -top-20 h-[2px] w-40 origin-left bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)]"
        />

        {/* Loading text with enhanced animation */}
        <motion.div className="absolute -top-28">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -20],
              filter: ["blur(4px)", "blur(0px)", "blur(0px)", "blur(4px)"]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              times: [0, 0.2, 0.8, 1]
            }}
            className="text-sm tracking-[0.3em] text-yellow-400/50"
          >
            LOADING
          </motion.span>
        </motion.div>

        <div className="relative h-56 w-56">
          {/* Outer rotating constellation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0"
          >
            {[...Array(12)].map((_, i) => (
              <motion.div key={i} className="absolute left-1/2 top-0 -translate-x-1/2">
                <motion.div
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.15,
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-yellow-400/30"
                  style={{
                    transform: `rotate(${i * 30}deg) translateY(-24px)`,
                  }}
                />
                {i % 2 === 0 && (
                  <motion.div
                    animate={{
                      height: [0, 20, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.15,
                    }}
                    className="absolute left-1/2 top-0 h-20 w-[1px] -translate-x-1/2 bg-gradient-to-b from-yellow-400/20 to-transparent"
                    style={{
                      transform: `rotate(${i * 30}deg)`,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Middle rotating ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-4"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.25,
                }}
                className="absolute left-1/2 top-0 flex h-1 w-1 -translate-x-1/2 items-center justify-center"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-16px)`,
                }}
              >
                <div className="h-full w-full rounded-full bg-yellow-400/30" />
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.25,
                  }}
                  className="absolute h-4 w-4 rounded-full bg-yellow-400/10 blur-sm"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Inner rotating elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-8"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 h-full w-[1px] -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotate(${i * 60}deg)`,
                }}
              >
                <motion.div
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    height: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                  className="h-full w-full bg-gradient-to-b from-yellow-400/0 via-yellow-400/20 to-yellow-400/0"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Logo Container with enhanced reveal */}
          <div className="relative h-full w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yellow_Prism_Text-Vf0vQ7EPIKdsdwD06r0JzMj0iCoLuD.png"
                alt="Yellow Prism Logo"
                fill
                className="object-contain"
              />
              <motion.div
                animate={{
                  opacity: [0, 0.1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-t from-yellow-400/0 via-yellow-400/10 to-yellow-400/0"
              />
            </motion.div>

            {/* Enhanced shutter effect */}
            <motion.div
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{
                delay: 1,
                duration: 0.7,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="absolute inset-0 origin-top"
            />
          </div>

          {/* Multiple pulsing rings with enhanced effects */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.07, 0.15],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.6,
                ease: "easeInOut",
              }}
              className="absolute -inset-4 rounded-full border border-yellow-400/20"
              style={{
                boxShadow: "0 0 20px rgba(250,204,21,0.1)",
              }}
            />
          ))}

          {/* Enhanced particle system */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0, 0.3, 0],
                scale: [0.8, 1, 0.8],
                x: Math.cos((i * Math.PI) / 6) * 80,
                y: Math.sin((i * Math.PI) / 6) * 80,
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20"
            >
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
                className="absolute inset-0 rounded-full bg-yellow-400/10 blur-sm"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative elements */}
        <div className="absolute -bottom-24 flex w-full flex-col items-center gap-4">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="h-[1px] w-20 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
          />
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="h-[1px] w-10 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
          />
        </div>
      </div>
    </motion.div>
  )
}