"use client"

import { Camera, Users, Play, ImageIcon, Video, Film } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const services = [
  {
    icon: Camera,
    title: "Commercial Photography",
    description: "Professional photography services for businesses, products, and advertising campaigns.",
    tags: ["Product", "Branding", "Editorial"],
  },
  {
    icon: Users,
    title: "Event Coverage",
    description: "Comprehensive event photography services for corporate events, conferences, and special occasions.",
    tags: ["Corporate", "Social", "Live"],
  },
  {
    icon: Video,
    title: "Video Production",
    description: "High-quality video content creation for commercials, events, and brand storytelling.",
    tags: ["Commercial", "Documentary", "Narrative"],
  },
  {
    icon: ImageIcon,
    title: "Product Photography",
    description: "Stunning product photography that highlights your items in the best possible light.",
    tags: ["E-commerce", "Catalog", "Lifestyle"],
  },
  {
    icon: Film,
    title: "Content Creation",
    description: "Creative content production for social media, websites, and marketing materials.",
    tags: ["Social Media", "Web", "Marketing"],
  },
  {
    icon: Play,
    title: "Post Production",
    description: "Professional editing and post-production services to perfect your visual content.",
    tags: ["Editing", "Color", "Retouching"],
  },
]

export default function Services() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={containerRef} id="services" className="relative bg-zinc-900 py-24">
      {/* Animated background pattern */}
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Our
            <span className="relative mx-2 inline-block sm:mx-4">
              <span className="relative z-10 text-yellow-400">Services</span>
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
            Portfolio
          </h2>
          <p className="mt-4 text-base text-white/60 font-display sm:text-lg">
            Elevating your vision through our comprehensive range of professional services
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl bg-black/50 p-6 backdrop-blur-sm sm:p-8"
            >
              {/* Service content */}
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 sm:h-12 sm:w-12">
                    <service.icon className="h-5 w-5 text-yellow-400 sm:h-6 sm:w-6" />
                  </div>
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === index ? 90 : 0,
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-yellow-400/30"
                  >
                    <Play className="h-4 w-4 text-yellow-400" />
                  </motion.div>
                </div>

                <h3 className="font-display text-lg font-bold text-white sm:text-xl">{service.title}</h3>
                <p className="mt-2 text-sm text-white/60 sm:text-base">{service.description}</p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={hoveredIndex === index ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                      className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs text-yellow-400"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.8,
                }}
                className="absolute -left-2 -top-2 h-12 w-12"
              >
                <div className="absolute left-0 top-0 h-full w-[2px] bg-yellow-400/30" />
                <div className="absolute left-0 top-0 h-[2px] w-full bg-yellow-400/30" />
              </motion.div>

              <motion.div
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.8,
                }}
                className="absolute -bottom-2 -right-2 h-12 w-12"
              >
                <div className="absolute bottom-0 right-0 h-full w-[2px] bg-yellow-400/30" />
                <div className="absolute bottom-0 right-0 h-[2px] w-full bg-yellow-400/30" />
              </motion.div>

              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}