"use client"

import { motion, AnimatePresence } from "framer-motion"
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

const categories = ["All", "Commercial", "Events"]

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory,
  )

  return (
    <section id="portfolio" className="relative bg-black px-4 py-16 font-display md:py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at center, #FCD34D 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-[100px]" />
        <div className="absolute right-1/4 top-3/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white text-pretty md:text-4xl lg:text-5xl">
            Our
            <span className="relative mx-2 md:mx-4">
              <span className="relative z-10 text-yellow-400">Portfolio</span>
              <motion.svg
                width="100%"
                height="12"
                viewBox="0 0 100 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-2 left-0 z-0 w-full"
              >
                <motion.path
                  d="M0 6C20 6 20 2 40 2C60 2 60 10 80 10C100 10 100 6 120 6"
                  stroke="#FCD34D"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </motion.svg>
            </span>
            Showcase
          </h2>
          <p className="mt-4 text-base text-white/60 md:text-lg">Capturing moments that tell your story</p>

          {/* Category Filter */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`relative rounded-full px-4 py-2 text-xs md:text-sm font-medium transition-colors md:px-6 ${
                  selectedCategory === category ? "bg-yellow-400 text-black" : "text-white hover:text-yellow-400"
                }`}
              >
                {category}
                {hoveredCategory === category && selectedCategory !== category && (
                  <motion.div
                    layoutId="categoryHover"
                    className="absolute inset-0 -z-10 rounded-full bg-yellow-400/10"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8"
          >
            {filteredItems.map((item, index) => (
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
                  className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                >
                  <p className="text-sm font-medium text-yellow-400">{item.category}</p>
                  <h3 className="mt-2 text-lg font-bold text-white md:text-xl">{item.title}</h3>
                </motion.div>

                {/* Corners */}
                <div className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-yellow-400/0 transition-all duration-300 group-hover:border-yellow-400/100 md:h-8 md:w-8" />
                <div className="absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-yellow-400/0 transition-all duration-300 group-hover:border-yellow-400/100 md:h-8 md:w-8" />
                <div className="absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-yellow-400/0 transition-all duration-300 group-hover:border-yellow-400/100 md:h-8 md:w-8" />
                <div className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-yellow-400/0 transition-all duration-300 group-hover:border-yellow-400/100 md:h-8 md:w-8" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}