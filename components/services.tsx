"use client"

import { Camera, Users, Play, ImageIcon, Video, Film } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Camera,
    title: "Commercial Photography",
    description: "Professional photography services for businesses, products, and advertising campaigns.",
  },
  {
    icon: Users,
    title: "Event Coverage",
    description: "Comprehensive event photography services for corporate events, conferences, and special occasions.",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "High-quality video content creation for commercials, events, and brand storytelling.",
  },
  {
    icon: ImageIcon,
    title: "Product Photography",
    description: "Stunning product photography that highlights your items in the best possible light.",
  },
  {
    icon: Film,
    title: "Content Creation",
    description: "Creative content production for social media, websites, and marketing materials.",
  },
  {
    icon: Play,
    title: "Post Production",
    description: "Professional editing and post-production services to perfect your visual content.",
  },
]

export default function Services() {
  return (
    <section className="bg-zinc-900 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-wider text-white">Our Services</h2>
          <p className="mt-4 text-lg text-white/60">Bringing your vision to life through our lens</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-black p-8 transition-all hover:bg-yellow-400/10"
            >
              <div className="relative z-10">
                <service.icon className="mb-4 h-8 w-8 text-yellow-400" />
                <h3 className="mb-4 text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>

              {/* Animated background */}
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent" />
                <motion.div
                  initial={false}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute -right-16 -top-16 h-32 w-32 rounded-full border border-yellow-400/20"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

