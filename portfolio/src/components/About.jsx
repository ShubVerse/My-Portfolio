import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel.jsx'

const facts = [
  { key: 'role', value: 'Frontend Developer' },
  { key: 'interest', value: 'UI/UX Design' },
  { key: 'builds', value: 'Responsive web applications' },
  { key: 'focus', value: 'Clean interfaces, good UX' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionLabel path="About" index="02" />

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-14 md:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              I build interfaces people
              <br className="hidden md:block" /> actually enjoy using.
            </h2>
            <div className="mt-8 space-y-5 text-muted text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                I&rsquo;m a frontend developer with a strong interest in UI/UX design.
                I enjoy building responsive web applications that feel considered from
                the first pixel to the last interaction.
              </p>
              <p>
                My focus stays on clean interfaces and good user experience &mdash;
                writing components that are easy to reason about, and interfaces that
                are easy to use.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="corner-brackets rounded-2xl border border-border bg-surface/60 p-6 font-mono text-sm"
          >
            <p className="text-xs text-muted mb-4">/about &mdash; profile</p>
            <dl className="space-y-3">
              {facts.map((f) => (
                <div key={f.key} className="flex items-start gap-2">
                  <dt className="text-primary shrink-0">{f.key}:</dt>
                  <dd className="text-text/90">&ldquo;{f.value}&rdquo;</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
