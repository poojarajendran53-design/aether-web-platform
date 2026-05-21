"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const remixPairs = [
  {
    id: 1,
    original: {
      title: "Sunset Dreams",
      artist: "aurora.eth",
      gradient: "from-bright-orange via-hot-pink to-lavender",
    },
    remix: {
      title: "Midnight Remix",
      artist: "voidwalker",
      gradient: "from-electric-blue via-lavender to-hot-pink",
    },
    remixes: 234,
  },
  {
    id: 2,
    original: {
      title: "Digital Flora",
      artist: "plantbased",
      gradient: "from-lime-green via-neon-yellow to-cream",
    },
    remix: {
      title: "Toxic Garden",
      artist: "acidwave",
      gradient: "from-hot-pink via-lime-green to-electric-blue",
    },
    remixes: 156,
  },
  {
    id: 3,
    original: {
      title: "Y2K Memory",
      artist: "2000sKid",
      gradient: "from-lavender via-electric-blue to-hot-pink",
    },
    remix: {
      title: "Future Past",
      artist: "timeloop",
      gradient: "from-neon-yellow via-bright-orange to-hot-pink",
    },
    remixes: 89,
  },
]

function RemixCard({ pair, index }: { pair: typeof remixPairs[0]; index: number }) {
  const [activeView, setActiveView] = useState<"original" | "remix">("original")

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      <div className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-xl">
        {/* Image comparison */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Original */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${pair.original.gradient}`}
            animate={{ opacity: activeView === "original" ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-mono text-foreground">
              Original
            </div>
          </motion.div>

          {/* Remix */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${pair.remix.gradient}`}
            animate={{ opacity: activeView === "remix" ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-mono text-foreground">
              Remix
            </div>
          </motion.div>

          {/* Toggle button */}
          <div className="absolute top-4 right-4 flex bg-white/90 rounded-full p-1">
            <button
              onClick={() => setActiveView("original")}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                activeView === "original" ? "bg-foreground text-background" : "text-foreground/60"
              }`}
            >
              OG
            </button>
            <button
              onClick={() => setActiveView("remix")}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                activeView === "remix" ? "bg-foreground text-background" : "text-foreground/60"
              }`}
            >
              RMX
            </button>
          </div>

          {/* Remix count */}
          <div className="absolute top-4 left-4 bg-hot-pink text-white px-3 py-1 rounded-full text-xs font-bold">
            {pair.remixes} Remixes
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-bold text-foreground">
                {activeView === "original" ? pair.original.title : pair.remix.title}
              </h3>
              <p className="text-sm text-foreground/50 font-mono">
                by @{activeView === "original" ? pair.original.artist : pair.remix.artist}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-foreground/5 rounded-full flex items-center justify-center text-foreground/60 hover:text-hot-pink transition-colors"
            >
              ↻
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-aether text-white font-semibold rounded-xl"
          >
            Create Your Remix →
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export function RemixInspiration() {
  return (
    <section className="py-24 px-4 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lavender/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block px-3 py-1 bg-hot-pink/10 text-hot-pink text-xs font-mono uppercase tracking-widest rounded-full mb-4 border border-hot-pink/20">
              Get Inspired
            </span>
            <h2 
              className="text-5xl md:text-7xl font-bold tracking-tighter"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Remix{" "}
              <span className="text-gradient-pink-blue">Inspiration</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-xl mt-4">
              See how creators transform original works into something entirely new. 
              Every remix tells a different story.
            </p>
          </div>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-foreground text-background font-semibold rounded-full"
            >
              Popular
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-foreground/5 text-foreground font-semibold rounded-full hover:bg-foreground/10 transition-colors"
            >
              Recent
            </motion.button>
          </div>
        </motion.div>

        {/* Remix grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remixPairs.map((pair, index) => (
            <RemixCard key={pair.id} pair={pair} index={index} />
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-foreground/5 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            How Remixing Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Find", desc: "Discover art that inspires you", icon: "◯" },
              { step: "02", title: "Remix", desc: "Add your creative twist", icon: "✦" },
              { step: "03", title: "Share", desc: "Credit the original & publish", icon: "◐" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-hot-pink font-mono text-sm mb-2">{item.step}</div>
                <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-foreground/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
