"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const artworks = [
  {
    id: 1,
    title: "Neon Dreams",
    artist: "pixelwitch",
    image: "bg-gradient-to-br from-hot-pink via-lavender to-electric-blue",
    likes: "2.4K",
    category: "Digital",
  },
  {
    id: 2,
    title: "Cyber Garden",
    artist: "void.exe",
    image: "bg-gradient-to-br from-lime-green via-neon-yellow to-bright-orange",
    likes: "1.8K",
    category: "3D",
  },
  {
    id: 3,
    title: "Retro Wave",
    artist: "synthboi",
    image: "bg-gradient-to-br from-electric-blue via-hot-pink to-neon-yellow",
    likes: "3.1K",
    category: "Motion",
  },
  {
    id: 4,
    title: "Glitch Paradise",
    artist: "error404",
    image: "bg-gradient-to-br from-bright-orange via-hot-pink to-lavender",
    likes: "945",
    category: "Glitch",
  },
  {
    id: 5,
    title: "Cosmic Dust",
    artist: "stardust.ai",
    image: "bg-gradient-to-br from-lavender via-electric-blue to-lime-green",
    likes: "1.2K",
    category: "AI",
  },
  {
    id: 6,
    title: "Y2K Memory",
    artist: "millennium",
    image: "bg-gradient-to-br from-neon-yellow via-lime-green to-electric-blue",
    likes: "2.7K",
    category: "Y2K",
  },
]

function ArtCard({ artwork, index }: { artwork: typeof artworks[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, rotateY: 5 }}
      className="group cursor-pointer"
      style={{ transformPerspective: 1000 }}
    >
      <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-xl">
        {/* Artwork image placeholder */}
        <div className={`aspect-[4/5] ${artwork.image} relative`}>
          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-foreground/40 flex items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-white text-foreground font-semibold rounded-full"
            >
              View Artwork
            </motion.button>
          </motion.div>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 text-foreground text-xs font-mono uppercase rounded-full">
              {artwork.category}
            </span>
          </div>

          {/* Like button */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-hot-pink"
          >
            ♥
          </motion.button>
        </div>

        {/* Card info */}
        <div className="p-4">
          <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-hot-pink transition-colors">
            {artwork.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground/60 font-mono">@{artwork.artist}</span>
            <span className="text-sm text-foreground/40 flex items-center gap-1">
              <span className="text-hot-pink">♥</span> {artwork.likes}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function InfiniteArtFeed() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <section ref={containerRef} className="py-24 px-4 bg-gradient-to-b from-cream to-lavender/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-8xl text-hot-pink/10 font-bold pointer-events-none select-none">✦</div>
      <div className="absolute bottom-20 right-10 text-8xl text-electric-blue/10 font-bold pointer-events-none select-none">◐</div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-lime-green/20 text-lime-green text-xs font-mono uppercase tracking-widest rounded-full mb-4 border border-lime-green/30">
            Trending Now
          </span>
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="text-foreground">Infinite</span>{" "}
            <span className="text-hot-pink">Art</span>{" "}
            <span className="text-electric-blue">Feed</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-xl mx-auto">
            Scroll through an endless stream of creativity. Double-tap to save, swipe to explore.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {["All", "Digital", "3D", "Motion", "AI", "Y2K", "Glitch"].map((filter, index) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                index === 0 
                  ? "bg-foreground text-background" 
                  : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Art grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <ArtCard key={artwork.id} artwork={artwork} index={index} />
          ))}
        </div>

        {/* Load more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-aether text-white font-semibold rounded-full glow-pink"
          >
            Load More Magic ✦
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
