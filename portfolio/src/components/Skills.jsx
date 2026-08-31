import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionLabel path="Skills" index="03" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-14"
        >
          What I work with
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-primary/40"
            >
              <p className="section-tag text-primary mb-1">{group.tag}</p>
              <h3 className="font-display text-lg font-medium mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-text/85 border border-border rounded-full px-3.5 py-1.5 transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
