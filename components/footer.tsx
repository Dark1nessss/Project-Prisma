"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone, ArrowUpRight, ChevronUp } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Background Elements */}
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
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at center, #FCD34D 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid gap-16 py-16 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="relative h-12 w-32">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yellow_Prism_Text-Vf0vQ7EPIKdsdwD06r0JzMj0iCoLuD.png"
                alt="Yellow Prism Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Capturing moments that tell your story. Professional photography and videography services for all your
              creative needs.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
                >
                  <social.icon className="h-5 w-5 text-white/60 transition-colors group-hover:text-yellow-400" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-medium text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Contact", href: "#contact" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="group flex items-center text-white/60 transition-colors hover:text-yellow-400"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-medium text-white">Contact Info</h3>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "123 Photography Lane, NY 10001" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "hello@yellowprism.com" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-white/60"
                >
                  <item.icon className="h-5 w-5 text-yellow-400" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-white/60 md:flex-row md:space-y-0">
            <p>© {new Date().getFullYear()} Yellow Prism. All rights reserved.</p>
            <div className="flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                  <motion.a key={index} href="#" whileHover={{ color: "#FCD34D" }} className="relative">
                    {item}
                    <motion.div
                      className="absolute -bottom-0.5 left-0 h-px w-0 bg-yellow-400"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}
              </nav>

              {/* Scroll to top button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
              >
                <ChevronUp className="h-5 w-5 text-white/60 transition-colors group-hover:text-yellow-400" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}