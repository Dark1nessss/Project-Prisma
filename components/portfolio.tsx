"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const portfolioItems = [
  {
    title: "Urban Architecture",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1545472956-3849699264de?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Fashion Editorial",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Corporate Event",
    category: "Events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Product Photography",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Wedding Ceremony",
    category: "Events",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Concert Photography",
    category: "Events",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60",
  },
]

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-wider text-white">Portfolio</h2>
          <p className="mt-4 text-lg text-white/60">Capturing moments that tell your story</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-zinc-900"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <motion.div
                initial={false}
                animate={{
                  y: hoveredIndex === index ? 0 : 20,
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
              >
                <p className="text-sm font-medium text-yellow-400">{item.category}</p>
                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
              </motion.div>

              {/* Corners */}
              <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-yellow-400/0 transition-all duration-300 group-hover:border-yellow-400/100" />
              <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-yellow-400/0 transition-all duration-300 group-hover:border-yellow-400/100" />
              <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-yellow-400/0 transition-all duration-300 group-hover:border-yellow-400/100" />
              <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-yellow-400/0 transition-all duration-300 group-hover:border-yellow-400/100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

