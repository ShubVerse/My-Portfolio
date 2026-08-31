import { motion } from 'framer-motion'
import { FileDown } from 'lucide-react'
import { resumeUrl } from '../data/nav.js'

export default function ResumeCTA() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="corner-brackets rounded-2xl border border-border bg-surface/50 px-8 py-14 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <p className="section-tag text-primary mb-3">resume.pdf</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
              Want to know more about my journey?
            </h2>
          </div>
          <a
            href={resumeUrl}
            download
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-bg font-medium text-sm px-6 py-3.5 shrink-0 transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(139,127,255,0.55)]"
          >
            <FileDown size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
