"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const moodPortals = [
  {
    id: "dreamy",
    name: "DREAMY",
    description: "Ethereal & surreal",
    gradient: "from-lavender via-hot-pink to-electric-blue",
    bgColor: "bg-lavender",
    icon: "◐",
  },
  {
    id: "chaotic",
    name: "CHAOTIC",
    description: "Bold & explosive",
    gradient: "from-hot-pink via-bright-orange to-neon-yellow",
    bgColor: "bg-hot-pink",
    icon: "✦",
  },
  {
    id: "zen",
    name: "ZEN",
    description: "Minimal & calm",
    gradient: "from-lime-green via-neon-yellow to-cream",
    bgColor: "bg-lime-green",
    icon: "◯",
  },
  {
    id: "retro",
    name: "RETRO",
    description: "Y2K nostalgia",
    gradient: "from-electric-blue via-lavender to-hot-pink",
    bgColor: "bg-electric-blue",
    icon: "◆",
  },
]

export function MoodPortals() {
  const [hoveredPortal, setHoveredPortal] = useState<string | null>(null)
  const [selectedPortal, setSelectedPortal] = useState<string | null>(null)

  return (
    <section className="py-24 px-4 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 noise-overlay opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-electric-blue/10 text-electric-blue text-xs font-mono uppercase tracking-widest rounded-full mb-4">
            Choose Your Vibe
          </span>
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="text-gradient-rainbow">Mood Portals</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-xl mx-auto">
            Step into different creative dimensions. Each portal leads to a curated universe of art.
          </p>
        </motion.div>

        {/* Portal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moodPortals.map((portal, index) => (
            <motion.div
              key={portal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.button
                onHoverStart={() => setHoveredPortal(portal.id)}
                onHoverEnd={() => setHoveredPortal(null)}
                onClick={() => setSelectedPortal(selectedPortal === portal.id ? null : portal.id)}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full aspect-[3/4] rounded-3xl relative overflow-hidden group cursor-pointer border-2 ${
                  selectedPortal === portal.id ? "border-foreground" : "border-transparent"
                }`}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${portal.gradient} opacity-80`} />
                
                {/* Animated overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: hoveredPortal === portal.id ? 0.6 : 0.3 }}
                />

                {/* Icon */}
                <motion.div
                  className="absolute top-6 left-6 text-5xl text-white/90"
                  animate={{ 
                    rotate: hoveredPortal === portal.id ? 360 : 0,
                    scale: hoveredPortal === portal.id ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {portal.icon}
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {portal.name}
                  </motion.h3>
                  <p className="text-white/70 text-sm font-mono">{portal.description}</p>
                  
                  {/* Enter button */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: hoveredPortal === portal.id ? 1 : 0,
                      x: hoveredPortal === portal.id ? 0 : -10
                    }}
                    className="mt-4"
                  >
                    <span className="inline-flex items-center gap-2 text-white text-sm font-semibold">
                      Enter Portal 
                      <motion.span
                        animate={{ x: hoveredPortal === portal.id ? [0, 5, 0] : 0 }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.div>
                </div>

                {/* Pixel corners decoration */}
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/50" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/50" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Selected portal info */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: selectedPortal ? 1 : 0,
            height: selectedPortal ? "auto" : 0
          }}
          className="mt-8 overflow-hidden"
        >
          {selectedPortal && (
            <div className="bg-foreground/5 rounded-2xl p-6 text-center">
              <p className="text-foreground/60 font-mono text-sm">
                You selected the{" "}
                <span className="font-bold text-foreground">
                  {moodPortals.find(p => p.id === selectedPortal)?.name}
                </span>{" "}
                portal. Ready to explore {moodPortals.find(p => p.id === selectedPortal)?.description.toLowerCase()} art?
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
