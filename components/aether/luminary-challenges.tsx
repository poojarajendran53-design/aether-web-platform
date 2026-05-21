"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const challenges = [
  {
    id: 1,
    title: "Neon Dreams",
    description: "Create art using only neon colors and dark backgrounds",
    prize: "500 AETHER",
    entries: 1234,
    deadline: "3 days left",
    gradient: "from-hot-pink via-electric-blue to-lavender",
    difficulty: "Beginner",
    icon: "✦",
  },
  {
    id: 2,
    title: "Y2K Revival",
    description: "Bring back the millennium aesthetic with modern twists",
    prize: "1000 AETHER",
    entries: 856,
    deadline: "5 days left",
    gradient: "from-lavender via-hot-pink to-neon-yellow",
    difficulty: "Intermediate",
    icon: "◐",
  },
  {
    id: 3,
    title: "AI Collab",
    description: "Partner with AI to create something neither could alone",
    prize: "2500 AETHER",
    entries: 2341,
    deadline: "7 days left",
    gradient: "from-electric-blue via-lime-green to-neon-yellow",
    difficulty: "Advanced",
    icon: "◯",
  },
]

function ChallengeCard({ challenge, index }: { challenge: typeof challenges[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  const difficultyColors = {
    Beginner: "bg-lime-green/20 text-lime-green",
    Intermediate: "bg-neon-yellow/20 text-neon-yellow",
    Advanced: "bg-hot-pink/20 text-hot-pink",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="relative bg-card border-2 border-border/50 rounded-3xl overflow-hidden shadow-xl h-full"
      >
        {/* Gradient header */}
        <div className={`h-32 bg-gradient-to-br ${challenge.gradient} relative overflow-hidden`}>
          {/* Animated pattern */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%'
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
              backgroundSize: '200% 200%',
            }}
          />
          
          {/* Icon */}
          <motion.div
            className="absolute top-4 right-4 text-5xl text-white/80"
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.8 }}
          >
            {challenge.icon}
          </motion.div>

          {/* Difficulty badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-bold rounded-full ${difficultyColors[challenge.difficulty as keyof typeof difficultyColors]}`}>
              {challenge.difficulty}
            </span>
          </div>

          {/* Deadline */}
          <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-mono text-foreground">
            ⏱ {challenge.deadline}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-hot-pink transition-colors">
            {challenge.title}
          </h3>
          <p className="text-foreground/60 mb-6 line-clamp-2">
            {challenge.description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-2xl font-bold text-gradient-pink-blue">{challenge.prize}</div>
              <div className="text-xs text-foreground/40 uppercase tracking-wider">Prize Pool</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground">{challenge.entries}</div>
              <div className="text-xs text-foreground/40 uppercase tracking-wider">Entries</div>
            </div>
          </div>

          {/* Join button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 bg-gradient-to-r ${challenge.gradient} text-white font-semibold rounded-xl`}
          >
            Accept Challenge ✦
          </motion.button>
        </div>

        {/* Pixel corner decorations */}
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-foreground/10" />
      </motion.div>
    </motion.div>
  )
}

export function LuminaryChallenges() {
  return (
    <section className="py-24 px-4 bg-cream relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 right-10 text-[200px] text-hot-pink/5 font-bold pointer-events-none select-none"
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        ✦
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-neon-yellow/20 text-neon-yellow text-xs font-mono uppercase tracking-widest rounded-full mb-4 border border-neon-yellow/30">
            Compete & Create
          </span>
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Luminary{" "}
            <span className="text-gradient-rainbow">Challenges</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-xl mx-auto">
            Push your creative limits. Compete with artists worldwide for glory, 
            prizes, and the title of AETHER Luminary.
          </p>
        </motion.div>

        {/* Leaderboard teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-6 px-6 py-4 bg-foreground/5 rounded-2xl">
            {[
              { rank: "🥇", name: "lunapixel", points: "12.4K" },
              { rank: "🥈", name: "voidmaster", points: "11.2K" },
              { rank: "🥉", name: "neonchild", points: "10.8K" },
            ].map((leader, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-xl">{leader.rank}</span>
                <div>
                  <div className="text-sm font-bold text-foreground">@{leader.name}</div>
                  <div className="text-xs text-foreground/40 font-mono">{leader.points} pts</div>
                </div>
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-hot-pink text-sm font-medium ml-4"
            >
              Full Leaderboard →
            </motion.button>
          </div>
        </motion.div>

        {/* Challenges grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-foreground/20 text-foreground font-semibold rounded-full hover:border-hot-pink hover:text-hot-pink transition-all"
          >
            Browse All Challenges
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
