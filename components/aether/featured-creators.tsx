"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const creators = [
  {
    id: 1,
    name: "Luna Pixel",
    handle: "lunapixel",
    avatar: "bg-gradient-to-br from-hot-pink to-lavender",
    followers: "24.5K",
    artworks: 156,
    specialty: "Digital Surrealism",
    verified: true,
  },
  {
    id: 2,
    name: "Void Entity",
    handle: "void.exe",
    avatar: "bg-gradient-to-br from-electric-blue to-lime-green",
    followers: "18.2K",
    artworks: 89,
    specialty: "3D Environments",
    verified: true,
  },
  {
    id: 3,
    name: "Neon Child",
    handle: "neonchild",
    avatar: "bg-gradient-to-br from-neon-yellow to-bright-orange",
    followers: "31.8K",
    artworks: 234,
    specialty: "Motion Graphics",
    verified: true,
  },
  {
    id: 4,
    name: "Glitch Queen",
    handle: "glitchqn",
    avatar: "bg-gradient-to-br from-bright-orange to-hot-pink",
    followers: "12.9K",
    artworks: 67,
    specialty: "Glitch Art",
    verified: false,
  },
]

function CreatorCard({ creator, index }: { creator: typeof creators[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        animate={{ 
          scale: isHovered ? 1.02 : 1,
          rotateX: isHovered ? 5 : 0,
        }}
        style={{ transformPerspective: 1000 }}
        className="bg-card border border-border/50 rounded-3xl p-6 relative overflow-hidden"
      >
        {/* Background glow */}
        <motion.div
          className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${creator.avatar} blur-3xl`}
          animate={{ opacity: isHovered ? 0.3 : 0.1 }}
        />

        <div className="relative z-10 flex items-start gap-4">
          {/* Avatar */}
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.8 }}
            className={`w-16 h-16 rounded-2xl ${creator.avatar} flex items-center justify-center text-white text-2xl font-bold shrink-0`}
          >
            {creator.name.charAt(0)}
          </motion.div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg text-foreground truncate">{creator.name}</h3>
              {creator.verified && (
                <span className="text-electric-blue text-sm">✓</span>
              )}
            </div>
            <p className="text-sm text-foreground/50 font-mono mb-2">@{creator.handle}</p>
            <p className="text-sm text-hot-pink font-medium">{creator.specialty}</p>
          </div>

          {/* Follow button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-4 py-2 bg-foreground text-background text-sm font-semibold rounded-full shrink-0"
          >
            Follow
          </motion.button>
        </div>

        {/* Stats */}
        <div className="relative z-10 flex gap-6 mt-4 pt-4 border-t border-border/50">
          <div>
            <div className="text-lg font-bold text-foreground">{creator.followers}</div>
            <div className="text-xs text-foreground/50 uppercase tracking-wider">Followers</div>
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">{creator.artworks}</div>
            <div className="text-xs text-foreground/50 uppercase tracking-wider">Artworks</div>
          </div>
        </div>

        {/* Hover decoration */}
        <motion.div
          className="absolute bottom-2 right-2 text-4xl opacity-10"
          animate={{ rotate: isHovered ? 180 : 0, scale: isHovered ? 1.2 : 1 }}
        >
          ✦
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function FeaturedCreators() {
  return (
    <section className="py-24 px-4 bg-cream relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, var(--foreground) 50px, var(--foreground) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, var(--foreground) 50px, var(--foreground) 51px)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block px-3 py-1 bg-bright-orange/20 text-bright-orange text-xs font-mono uppercase tracking-widest rounded-full mb-4 border border-bright-orange/30">
              Top Talent
            </span>
            <h2 
              className="text-5xl md:text-7xl font-bold tracking-tighter"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Featured{" "}
              <span className="text-gradient-pink-blue">Creators</span>
            </h2>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="text-foreground/60 hover:text-foreground font-medium flex items-center gap-2 self-start md:self-auto"
          >
            View All Creators
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Creators grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {creators.map((creator, index) => (
            <CreatorCard key={creator.id} creator={creator} index={index} />
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-hot-pink/10 via-electric-blue/10 to-lavender/10 rounded-3xl border border-hot-pink/20">
            <p className="text-xl text-foreground/70 mb-4">
              Ready to join the creative elite?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-cyber text-white font-semibold rounded-full glow-blue"
            >
              Become a Creator ✦
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
