"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

const experiences = [
  {
    title: "Commercial Photography",
    description: "Elevating brands through compelling visual storytelling",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Event Coverage",
    description: "Capturing the energy and emotion of live moments",
    image: "https://images.unsplash.com/photo-1554941829-202a0b2403b8?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Portrait Sessions",
    description: "Creating timeless portraits that tell your story",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&auto=format&fit=crop&q=60",
  },
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen overflow-hidden bg-black py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at center, #FCD34D 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <motion.div
          style={{ y, opacity }}
          className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[100px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]), opacity }}
          className="absolute -right-1/4 top-1/2 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[100px]"
        />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Our
            <span className="relative mx-4 text-yellow-400">Vision</span>
            Story
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-display mx-auto mt-6 max-w-2xl text-lg text-white/60"
          >
            Transforming moments into timeless memories through the art of visual storytelling.
          </motion.p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <Image
                  src={exp.image || "/placeholder.svg"}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

                <div className="absolute inset-0 p-8">
                  <div className="flex h-full flex-col justify-end">
                    <motion.h3
                      animate={{
                        y: hoveredIndex === index ? -10 : 0,
                      }}
                      className="font-display text-2xl font-bold text-white"
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 10,
                      }}
                      className="mt-2 text-white/80"
                    >
                      {exp.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative corner elements */}
              <motion.div
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.8,
                }}
                className="absolute -left-2 -top-2 h-12 w-12"
              >
                <div className="absolute left-0 top-0 h-full w-[2px] bg-yellow-400" />
                <div className="absolute left-0 top-0 h-[2px] w-full bg-yellow-400" />
              </motion.div>
              <motion.div
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.8,
                }}
                className="absolute -bottom-2 -right-2 h-12 w-12"
              >
                <div className="absolute bottom-0 right-0 h-full w-[2px] bg-yellow-400" />
                <div className="absolute bottom-0 right-0 h-[2px] w-full bg-yellow-400" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 grid gap-8 md:grid-cols-4"
        >
          {[
            { number: "10+", label: "Years of Excellence" },
            { number: "500+", label: "Projects Delivered" },
            { number: "50+", label: "Industry Awards" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="relative z-10">
                <div className="font-display text-4xl font-bold text-yellow-400">{stat.number}</div>
                <div className="mt-1 text-sm text-white/60">{stat.label}</div>
              </div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -right-12 -top-12 h-24 w-24 rounded-full border border-yellow-400/20"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}