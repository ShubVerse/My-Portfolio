import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionLabel path="Projects" index="04" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4"
        >
          Featured work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-muted max-w-xl mb-16"
        >
          A closer look at what I&rsquo;ve built &mdash; from the problem to the interface.
        </motion.p>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={i % 2 === 1}
              onOpenCaseStudy={setActive}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
