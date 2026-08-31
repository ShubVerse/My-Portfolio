import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (project) closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            aria-label="Close case study"
            className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full sm:max-w-2xl max-h-[88vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-border bg-surface-2 p-7 md:p-9"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="section-tag text-primary mb-2">{project.index} &middot; case study</p>
                <h3 id="case-study-title" className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                  {project.name}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 p-2 rounded-full border border-border text-muted hover:text-text hover:border-primary/50 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-6">
              <CaseRow label="Problem" value={project.caseStudy.problem} />
              <CaseRow label="Solution" value={project.caseStudy.solution} />
              <div>
                <p className="section-tag text-muted mb-2">Features</p>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-text/85">
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="section-tag text-muted mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="font-mono text-xs text-muted border border-border rounded-full px-3 py-1.5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <CaseRow label="My Role" value={project.caseStudy.role} />
              <CaseRow label="Outcome" value={project.caseStudy.outcome} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CaseRow({ label, value }) {
  return (
    <div>
      <p className="section-tag text-muted mb-2">{label}</p>
      <p className="text-sm md:text-base text-text/85 leading-relaxed">{value}</p>
    </div>
  )
}
