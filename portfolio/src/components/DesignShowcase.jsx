import { motion } from 'framer-motion'
import { Frame } from 'lucide-react'
import SectionLabel from './SectionLabel.jsx'
import { designShowcase } from '../data/projects.js'

export default function DesignShowcase() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-surface/30">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionLabel path="Design Showcase" index="05" />

        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
          >
            UI/UX explorations
          </motion.h2>
          <p className="font-mono text-xs text-muted">canvas / 04 frames</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {designShowcase.map((frame, i) => (
            <motion.div
              key={frame.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="corner-brackets group relative aspect-[16/10] rounded-2xl border border-border bg-bg overflow-hidden"
            >
              {frame.image ? (
                <img
                  src={frame.image}
                  alt={frame.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="absolute inset-0 dot-grid flex flex-col items-center justify-center gap-3 text-muted">
                  <Frame size={26} strokeWidth={1.4} />
                  <span className="font-mono text-xs">[Add UI shot]</span>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between bg-gradient-to-t from-bg/90 to-transparent">
                <span className="font-display text-sm font-medium">{frame.label}</span>
                <span className="font-mono text-[11px] text-muted">{frame.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
