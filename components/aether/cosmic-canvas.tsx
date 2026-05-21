"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const cosmicElements = [
  { type: "star", color: "bg-neon-yellow", size: "w-2 h-2", position: { top: "10%", left: "15%" } },
  { type: "star", color: "bg-hot-pink", size: "w-3 h-3", position: { top: "20%", left: "80%" } },
  { type: "planet", color: "bg-gradient-to-br from-electric-blue to-lavender", size: "w-12 h-12", position: { top: "30%", left: "5%" } },
  { type: "star", color: "bg-lime-green", size: "w-2 h-2", position: { top: "60%", left: "90%" } },
  { type: "planet", color: "bg-gradient-to-br from-hot-pink to-bright-orange", size: "w-8 h-8", position: { top: "70%", left: "70%" } },
  { type: "star", color: "bg-electric-blue", size: "w-4 h-4", position: { top: "85%", left: "20%" } },
]

export function CosmicCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section 
      ref={containerRef}
      className="py-32 px-4 bg-foreground relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated cosmic background */}
      <div className="absolute inset-0">
        {/* Stars */}
        {cosmicElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} ${element.color} ${element.type === 'planet' ? 'rounded-full' : 'rotate-45'}`}
            style={{ 
              top: element.position.top, 
              left: element.position.left,
              y: index % 2 === 0 ? y1 : y2
            }}
            animate={element.type === 'star' ? { 
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1]
            } : {}}
            transition={{ duration: 2 + index, repeat: Infinity }}
          />
        ))}

        {/* Large orbital ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"
          style={{ x: "-50%", y: "-50%", rotate }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-white/3 rounded-full"
          style={{ x: "-50%", y: "-50%", rotate }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-neon-yellow/20 text-neon-yellow text-xs font-mono uppercase tracking-widest rounded-full mb-6 border border-neon-yellow/30">
              Infinite Possibilities
            </span>
            <h2 
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Cosmic{" "}
              <span className="text-gradient-sunset">Canvas</span>
            </h2>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Your creativity has no boundaries here. Paint across dimensions, 
              sculpt with light, and compose universes. The canvas is infinite.
            </p>

            {/* Feature list */}
            <div className="space-y-4 mb-8">
              {[
                { icon: "◐", text: "Real-time collaborative creation" },
                { icon: "✦", text: "AI-powered creative assistance" },
                { icon: "◯", text: "Export in any dimension" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-2xl text-hot-pink">{feature.icon}</span>
                  <span className="text-white/70">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-sunset text-foreground font-semibold rounded-full glow-yellow"
            >
              Start Creating →
            </motion.button>
          </motion.div>

          {/* Right - Canvas preview */}
          <motion.div
            style={{ scale }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-square rounded-3xl bg-gradient-to-br from-hot-pink/20 via-electric-blue/20 to-lavender/20 border border-white/10 p-8 relative overflow-hidden"
            >
              {/* Canvas mockup */}
              <div className="absolute inset-8 rounded-2xl bg-white/5 border border-white/10">
                {/* Toolbar mockup */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {['bg-hot-pink', 'bg-electric-blue', 'bg-neon-yellow', 'bg-lime-green'].map((color, i) => (
                    <motion.div
                      key={i}
                      className={`w-4 h-4 rounded-full ${color}`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>

                {/* Art preview */}
                <div className="absolute inset-8 top-16">
                  <motion.div
                    className="w-full h-full rounded-xl overflow-hidden"
                    animate={{
                      background: [
                        "linear-gradient(45deg, var(--hot-pink), var(--electric-blue))",
                        "linear-gradient(90deg, var(--lavender), var(--neon-yellow))",
                        "linear-gradient(135deg, var(--lime-green), var(--bright-orange))",
                        "linear-gradient(45deg, var(--hot-pink), var(--electric-blue))",
                      ]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                </div>
              </div>

              {/* Floating brush */}
              <motion.div
                className="absolute bottom-12 right-12 text-4xl"
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🖌️
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 bg-neon-yellow rounded-full blur-xl opacity-50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-hot-pink rounded-full blur-xl opacity-40"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
