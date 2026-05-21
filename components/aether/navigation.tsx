"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

const navLinks = [
  { label: "Explore", href: "#explore" },
  { label: "Create", href: "#create" },
  { label: "Rooms", href: "#rooms" },
  { label: "Challenges", href: "#challenges" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(253, 252, 248, 0)", "rgba(253, 252, 248, 0.95)"]
  )

  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.1)"]
  )

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        style={{ backgroundColor, borderColor }}
        className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-bold tracking-tighter"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-gradient-pink-blue">AETHER</span>
            </motion.a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className={`text-sm font-medium transition-colors ${
                    hasScrolled ? "text-foreground/70 hover:text-foreground" : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="hidden md:flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Sign In
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-aether text-white text-sm font-semibold rounded-full"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                className="w-6 h-0.5 bg-foreground"
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-6 h-0.5 bg-foreground"
              />
              <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                className="w-6 h-0.5 bg-foreground"
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
          pointerEvents: isOpen ? "auto" : "none"
        }}
        className="fixed top-16 left-0 right-0 z-40 bg-cream border-b border-foreground/10 md:hidden"
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                x: isOpen ? 0 : -20,
                transition: { delay: index * 0.1 }
              }}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-foreground/70 hover:text-hot-pink transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
          <div className="pt-4 border-t border-foreground/10 space-y-3">
            <button className="block w-full text-left text-lg font-medium text-foreground/70">
              Sign In
            </button>
            <button className="block w-full px-6 py-3 bg-gradient-aether text-white font-semibold rounded-full text-center">
              Get Started
            </button>
          </div>
        </div>
      </motion.div>
    </>
  )
}
