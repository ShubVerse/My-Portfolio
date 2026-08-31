import { motion } from 'framer-motion'

// Eyebrow label styled like a file path in a code editor tab —
// a structural device that reflects the developer's own working world.
export default function SectionLabel({ path, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-4"
    >
      {index && <span className="section-tag text-primary">{index}</span>}
      <span className="section-tag">
        <span className="text-muted">~/</span>
        {path}
      </span>
      <span className="h-px flex-1 bg-border" />
    </motion.div>
  )
}
