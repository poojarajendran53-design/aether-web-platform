"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const footerLinks = {
  platform: [
    { label: "Explore", href: "#" },
    { label: "Create", href: "#" },
    { label: "Challenges", href: "#" },
    { label: "Live Rooms", href: "#" },
  ],
  community: [
    { label: "Discord", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
  ],
  resources: [
    { label: "Help Center", href: "#" },
    { label: "Tutorials", href: "#" },
    { label: "API Docs", href: "#" },
    { label: "Status", href: "#" },
  ],
  legal: [
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Licenses", href: "#" },
  ],
}

const floatingIcons = ["✦", "◐", "◯", "◆", "▲", "★"]

export function ExperimentalFooter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-white/5 text-6xl font-bold"
            style={{
              left: `${10 + index * 15}%`,
              top: `${20 + (index % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Top section - CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to{" "}
            <span className="text-gradient-sunset">Create?</span>
          </h2>
          <p className="text-xl text-white/60 mb-8 max-w-xl mx-auto">
            Join the AETHER universe and start your creative journey today.
          </p>
          
          {/* Email signup */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            {!isSubscribed ? (
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-hot-pink"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-8 py-4 bg-gradient-aether text-white font-semibold rounded-full glow-pink"
                >
                  Join ✦
                </motion.button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-6 py-4 bg-lime-green/20 border border-lime-green/30 rounded-full text-lime-green"
              >
                ✓ Welcome to AETHER! Check your inbox.
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: "var(--hot-pink)" }}
                      className="text-white/70 hover:text-hot-pink transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold tracking-tighter"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-gradient-pink-blue">AETHER</span>
            </motion.div>

            {/* Social icons */}
            <div className="flex gap-4">
              {["◐", "◯", "✦", "◆"].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-hot-pink hover:text-white transition-colors"
                >
                  {icon}
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-white/40 text-sm font-mono">
              © 2024 AETHER. All rights reserved.
            </p>
          </div>
        </div>

        {/* Easter egg corner */}
        <motion.div
          className="absolute bottom-4 right-4 text-white/10 text-xs font-mono cursor-pointer"
          whileHover={{ color: "var(--hot-pink)" }}
        >
          Made with ✦ in the digital cosmos
        </motion.div>
      </div>

      {/* Gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-hot-pink via-electric-blue to-lavender" />
    </footer>
  )
}
