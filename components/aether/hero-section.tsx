"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const floatingStickers = [
  { emoji: "✦", color: "text-hot-pink", size: "text-4xl", delay: 0 },
  { emoji: "◐", color: "text-electric-blue", size: "text-5xl", delay: 0.2 },
  { emoji: "✧", color: "text-neon-yellow", size: "text-3xl", delay: 0.4 },
  { emoji: "◯", color: "text-lime-green", size: "text-6xl", delay: 0.6 },
  { emoji: "◆", color: "text-lavender", size: "text-4xl", delay: 0.8 },
  { emoji: "▲", color: "text-bright-orange", size: "text-5xl", delay: 1 },
]

function FloatingSticker({ emoji, color, size, delay, index }: { 
  emoji: string
  color: string
  size: string
  delay: number
  index: number 
}) {
  const positions = [
    { x: "5%", y: "15%" },
    { x: "85%", y: "20%" },
    { x: "10%", y: "70%" },
    { x: "90%", y: "65%" },
    { x: "75%", y: "85%" },
    { x: "20%", y: "45%" },
  ]

  return (
    <motion.div
      className={`absolute ${color} ${size} font-bold pointer-events-none select-none`}
      style={{ left: positions[index].x, top: positions[index].y }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        y: [0, -20, 0],
      }}
      transition={{
        duration: 0.8,
        delay,
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.5,
        }
      }}
    >
      {emoji}
    </motion.div>
  )
}

function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { stiffness: 150, damping: 15 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.3)
    y.set((e.clientY - centerY) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

function GlitchText({ text, className }: { text: string; className?: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <span className="relative z-10">{text}</span>
      {isHovered && (
        <>
          <motion.span
            className="absolute inset-0 text-hot-pink z-0"
            animate={{ x: [-2, 2, -2], opacity: [0.8, 0.6, 0.8] }}
            transition={{ duration: 0.1, repeat: Infinity }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-electric-blue z-0"
            animate={{ x: [2, -2, 2], opacity: [0.8, 0.6, 0.8] }}
            transition={{ duration: 0.1, repeat: Infinity }}
          >
            {text}
          </motion.span>
        </>
      )}
    </motion.span>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream"
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, var(--hot-pink) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, var(--electric-blue) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, var(--lavender) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, var(--hot-pink) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating stickers */}
      {floatingStickers.map((sticker, index) => (
        <FloatingSticker key={index} {...sticker} index={index} />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-hot-pink/10 border-2 border-hot-pink text-hot-pink text-sm font-mono uppercase tracking-widest rounded-full">
            ✦ Welcome to the Digital Art Universe ✦
          </span>
        </motion.div>

        {/* Giant typography */}
        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tighter"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <GlitchText text="AETHER" className="text-gradient-pink-blue" />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground/70 mt-4 tracking-wide"
          >
            Where <span className="text-hot-pink font-semibold">creativity</span> meets the{" "}
            <span className="text-electric-blue font-semibold">cosmos</span>
          </motion.p>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Discover, create, and remix art in our immersive playground. 
          Join thousands of creators building the future of digital expression.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton className="px-8 py-4 bg-gradient-aether text-white text-lg font-semibold rounded-full glow-pink transition-all">
            Enter the Universe →
          </MagneticButton>
          <MagneticButton className="px-8 py-4 bg-transparent border-2 border-foreground/20 text-foreground text-lg font-semibold rounded-full hover:border-hot-pink hover:text-hot-pink transition-all">
            Watch Demo
          </MagneticButton>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: "50K+", label: "Creators" },
            { value: "1M+", label: "Artworks" },
            { value: "∞", label: "Possibilities" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-pink-blue">{stat.value}</div>
              <div className="text-sm text-foreground/50 uppercase tracking-wider font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-hot-pink rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
