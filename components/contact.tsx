"use client"

import { motion, useInView } from "framer-motion"
import { Mail, Phone, Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react"
import { useRef, useState } from "react"

export default function Contact() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const contactMethods = [
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@yellowprism.com",
      description: "For project inquiries and collaborations",
      href: "mailto:hello@yellowprism.com",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM EST",
      href: "tel:+15551234567",
    },
  ]

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", username: "@yellowprism" },
    { icon: Twitter, label: "Twitter", href: "#", username: "@yellowprism" },
    { icon: Facebook, label: "Facebook", href: "#", username: "Yellow Prism" },
  ]

  return (
    <section ref={containerRef} id="contact" className="relative bg-zinc-900 px-4 py-16 md:py-24">
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Let's Create
            <span className="relative mx-2 block md:mx-4 md:inline">
              <span className="relative z-10 text-yellow-400">Magic</span>
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
            Together
          </h2>
        </motion.div>

        {/* Contact Methods */}
        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-sm md:p-8"
            >
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10">
                  <method.icon className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white md:text-2xl">{method.label}</h3>
                <p className="mt-1 text-sm text-white/60 md:text-base">{method.description}</p>
                <p className="mt-4 font-medium text-yellow-400">{method.value}</p>
              </div>

              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1 : 0.8,
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400"
              >
                <ArrowUpRight className="h-4 w-4 text-black" />
              </motion.div>

              <motion.div
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
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <h3 className="text-center text-xl font-bold text-white md:text-2xl">Connect With Us</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-6 md:mt-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index + contactMethods.length)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm md:h-16 md:w-16">
                  <social.icon className="h-5 w-5 text-white transition-colors group-hover:text-yellow-400 md:h-6 md:w-6" />
                </div>
                <motion.div
                  animate={{
                    scale: hoveredIndex === index + contactMethods.length ? 1 : 0,
                    opacity: hoveredIndex === index + contactMethods.length ? 1 : 0,
                  }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white/60 md:text-sm"
                >
                  {social.username}
                </motion.div>
                <motion.div
                  animate={{
                    scale: hoveredIndex === index + contactMethods.length ? 1.2 : 1,
                  }}
                  className="absolute -inset-2 rounded-full border border-yellow-400/30"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}