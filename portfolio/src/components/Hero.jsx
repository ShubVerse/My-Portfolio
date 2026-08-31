import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { socialLinks, resumeUrl } from '../data/nav.js'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-28 pb-20 overflow-hidden"
    >
      {/* Design-canvas dot grid, faded toward the edges */}
      <div
        className="absolute inset-0 dot-grid opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 55% at 50% 35%, black 40%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 55% at 50% 35%, black 40%, transparent 80%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-primary/10 blur-[140px]"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-content mx-auto w-full px-6 md:px-8"
      >
        <motion.p variants={item} className="section-tag mb-6">
          <span className="text-primary">$</span> Who ami
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display font-semibold tracking-tight text-text leading-[1.02] text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hi, I&rsquo;m
          <br />
          <span className="text-primary">Shubham Awasthi</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-6 font-display text-xl sm:text-2xl md:text-3xl text-text/90"
        >
          Frontend Developer &amp; UI/UX Designer
        </motion.h2>

        <motion.p variants={item} className="mt-5 max-w-xl text-base md:text-lg text-muted leading-relaxed">
          I design and build modern, responsive and user-focused digital experiences.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-bg font-medium text-sm px-6 py-3.5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(139,127,255,0.55)]"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={resumeUrl}
            download
            className="group inline-flex items-center gap-2 rounded-full border border-border text-text font-medium text-sm px-6 py-3.5 transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center gap-5">
          <a href="https://github.com/shubVerse" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-muted hover:text-text transition-colors">
            <Github size={19} strokeWidth={1.75} />
          </a>
          <a href="https://www.linkedin.com/in/shubham5851/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-muted hover:text-text transition-colors">
            <Linkedin size={19} strokeWidth={1.75} />
          </a>
          <a href={`mailto:${socialLinks.email}`} aria-label="Send email" className="text-muted hover:text-text transition-colors">
            <Mail size={19} strokeWidth={1.75} />
          </a>
        </motion.div>

        {/* Signature element: a small "inspector" panel bridging code + design vocabulary */}
        <motion.div
          variants={item}
          className="corner-brackets mt-16 max-w-xs border border-border rounded-xl bg-surface/60 backdrop-blur-sm px-5 py-4 font-mono text-xs text-muted"
        >
          <p><span className="text-primary">&lt;Developer</span></p>
          <p className="pl-3">role=<span className="text-accent">"Frontend"</span></p>
          <p className="pl-3">focus=<span className="text-accent">"UI/UX Design"</span></p>
          <p>
            <span className="text-primary">/&gt;</span>
            <motion.span
              aria-hidden="true"
              className="inline-block w-[7px] h-3.5 bg-primary ml-1.5 align-middle"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
            />
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
