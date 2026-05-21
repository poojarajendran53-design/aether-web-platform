"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const liveRooms = [
  {
    id: 1,
    name: "Cyber Lounge",
    host: "neonmaster",
    viewers: 234,
    gradient: "from-electric-blue to-lavender",
    status: "Live Now",
    activity: "Collaborative Drawing",
  },
  {
    id: 2,
    name: "Pixel Paradise",
    host: "pixelwitch",
    viewers: 156,
    gradient: "from-hot-pink to-bright-orange",
    status: "Live Now",
    activity: "Pixel Art Jam",
  },
  {
    id: 3,
    name: "Zen Garden",
    host: "mindfulart",
    viewers: 89,
    gradient: "from-lime-green to-neon-yellow",
    status: "Starting Soon",
    activity: "Meditation & Art",
  },
  {
    id: 4,
    name: "Glitch Lab",
    host: "error404",
    viewers: 312,
    gradient: "from-bright-orange to-hot-pink",
    status: "Live Now",
    activity: "Glitch Workshop",
  },
]

function LiveBadge() {
  const [pulse, setPulse] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => setPulse(p => !p), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
      <span className={`w-2 h-2 bg-white rounded-full ${pulse ? 'opacity-100' : 'opacity-50'}`} />
      LIVE
    </span>
  )
}

function RoomCard({ room, index }: { room: typeof liveRooms[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <motion.div
        whileHover={{ y: -8 }}
        className="relative bg-card border border-border/50 rounded-3xl overflow-hidden shadow-xl"
      >
        {/* Room preview */}
        <div className={`aspect-video bg-gradient-to-br ${room.gradient} relative overflow-hidden`}>
          {/* Animated activity indicators */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: isHovered ? [1, 1.2, 1] : 1,
                opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-32 h-32 rounded-full bg-white/20 blur-xl"
            />
          </div>

          {/* Live badge */}
          <div className="absolute top-4 left-4">
            {room.status === "Live Now" ? (
              <LiveBadge />
            ) : (
              <span className="px-2 py-1 bg-neon-yellow text-foreground text-xs font-bold rounded-full">
                Starting Soon
              </span>
            )}
          </div>

          {/* Viewer count */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 bg-black/50 text-white text-xs rounded-full">
            <span>👁</span>
            <span>{room.viewers}</span>
          </div>

          {/* Join overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-white text-foreground font-semibold rounded-full"
            >
              Join Room →
            </motion.button>
          </motion.div>

          {/* Activity avatars */}
          <div className="absolute bottom-4 left-4 flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-white/90 border-2 border-white flex items-center justify-center text-xs"
              >
                {String.fromCodePoint(0x1F600 + i)}
              </div>
            ))}
            <div className="w-8 h-8 rounded-full bg-foreground text-white border-2 border-white flex items-center justify-center text-xs font-bold">
              +{room.viewers - 4}
            </div>
          </div>
        </div>

        {/* Room info */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-lg text-foreground group-hover:text-hot-pink transition-colors">
                {room.name}
              </h3>
              <p className="text-sm text-foreground/50 font-mono">by @{room.host}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-foreground/40 uppercase tracking-wider font-mono">
              {room.activity}
            </span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              className="text-hot-pink text-sm font-medium"
            >
              Enter →
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function LiveCreativeRooms() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-cream to-electric-blue/10 relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-hot-pink/20 to-transparent"
            style={{ top: `${20 + i * 15}%`, width: '100%' }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-electric-blue/10 text-electric-blue text-xs font-mono uppercase tracking-widest rounded-full mb-4 border border-electric-blue/20">
            Real-Time Creation
          </span>
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Live Creative{" "}
            <span className="text-hot-pink">Rooms</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-xl mx-auto">
            Jump into live sessions with creators worldwide. 
            Create together, learn together, vibe together.
          </p>
        </motion.div>

        {/* Active rooms count */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-foreground/5 rounded-full">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                    ['from-hot-pink to-lavender', 'from-electric-blue to-lime-green', 'from-neon-yellow to-bright-orange', 'from-lavender to-hot-pink', 'from-lime-green to-electric-blue'][i]
                  } border-2 border-cream`}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
            </div>
            <span className="text-foreground/60 font-mono text-sm">
              <span className="text-hot-pink font-bold">791</span> creators online now
            </span>
          </div>
        </motion.div>

        {/* Rooms grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {liveRooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>

        {/* Create room CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-foreground text-background font-semibold rounded-full inline-flex items-center gap-3"
          >
            <span className="text-xl">+</span>
            Create Your Room
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
