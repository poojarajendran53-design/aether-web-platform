"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"

const profiles = [
  {
    id: 1,
    name: "Stellar Dreams",
    handle: "stellardreams",
    avatar: "bg-gradient-to-br from-lavender to-electric-blue",
    bio: "Creating cosmic digital experiences ✦ AI artist & dreamer",
    tags: ["AI Art", "Cosmic", "Surreal"],
    mood: "Dreamy",
    online: true,
  },
  {
    id: 2,
    name: "Pixel Punk",
    handle: "pxlpunk",
    avatar: "bg-gradient-to-br from-hot-pink to-bright-orange",
    bio: "Glitching reality one pixel at a time 🔥 Y2K enthusiast",
    tags: ["Glitch", "Y2K", "Pixel"],
    mood: "Chaotic",
    online: true,
  },
  {
    id: 3,
    name: "Zen Master",
    handle: "zenmaster.art",
    avatar: "bg-gradient-to-br from-lime-green to-neon-yellow",
    bio: "Minimalist digital artist 🌿 Less is more",
    tags: ["Minimal", "Zen", "Abstract"],
    mood: "Zen",
    online: false,
  },
  {
    id: 4,
    name: "Neon Prophet",
    handle: "neonprophet",
    avatar: "bg-gradient-to-br from-electric-blue to-hot-pink",
    bio: "Painting with light in the digital void 💫 Motion designer",
    tags: ["Motion", "Neon", "3D"],
    mood: "Retro",
    online: true,
  },
]

function DraggableProfileCard({ profile, index }: { profile: typeof profiles[0]; index: number }) {
  const [isDragging, setIsDragging] = useState(false)
  const constraintsRef = useRef(null)

  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      dragElastic={0.1}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      initial={{ opacity: 0, scale: 0.8, rotate: -5 + index * 3 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -5 + index * 3 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      className={`relative cursor-grab active:cursor-grabbing ${isDragging ? 'z-50' : ''}`}
      style={{ transformOrigin: 'center center' }}
    >
      <div className="w-72 bg-card border-2 border-border/50 rounded-3xl p-6 shadow-xl sticker-shadow">
        {/* Decorative corner */}
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-neon-yellow rounded-full flex items-center justify-center text-foreground text-sm font-bold rotate-12">
          ✦
        </div>

        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Avatar */}
          <div className={`w-14 h-14 rounded-xl ${profile.avatar} flex items-center justify-center text-white text-xl font-bold relative`}>
            {profile.name.charAt(0)}
            {profile.online && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-lime-green rounded-full border-2 border-card" />
            )}
          </div>

          {/* Name & handle */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-foreground truncate">{profile.name}</h3>
            <p className="text-sm text-foreground/50 font-mono">@{profile.handle}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{profile.bio}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {profile.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-foreground/5 text-foreground/60 text-xs rounded-full font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Mood badge */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-foreground/40 uppercase tracking-wider font-mono">
            Mood: <span className="text-hot-pink">{profile.mood}</span>
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-electric-blue text-sm font-medium"
          >
            Connect →
          </motion.button>
        </div>

        {/* Drag hint */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <div className="w-8 h-1 bg-foreground/10 rounded-full" />
        </div>
      </div>
    </motion.div>
  )
}

export function CreativeProfileCards() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-lavender/20 to-cream relative overflow-hidden">
      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 left-[10%] text-6xl text-hot-pink/20 pointer-events-none"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ◯
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-[15%] text-8xl text-electric-blue/20 pointer-events-none"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        ◐
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-lavender/30 text-lavender text-xs font-mono uppercase tracking-widest rounded-full mb-4 border border-lavender/40">
            Interactive Profiles
          </span>
          <h2 
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Creative{" "}
            <span className="text-hot-pink">Profile</span>{" "}
            <span className="text-electric-blue">Cards</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-xl mx-auto">
            Drag to play. Each card is a portal to a creative mind. Connect with artists who match your vibe.
          </p>
        </motion.div>

        {/* Profile cards - scattered layout */}
        <div className="relative min-h-[600px] flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {profiles.map((profile, index) => (
              <DraggableProfileCard key={profile.id} profile={profile} index={index} />
            ))}
          </div>
        </div>

        {/* Interaction hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-foreground/40 text-sm font-mono mt-8"
        >
          ↖ Drag cards to interact • Hover for details ↗
        </motion.p>
      </div>
    </section>
  )
}
