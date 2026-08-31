import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react'
import { navLinks, socialLinks, resumeUrl } from '../data/nav.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="max-w-content mx-auto flex items-center justify-between px-6 md:px-8 h-16 md:h-20"
      >
        <a
          href="#home"
          className="font-display font-semibold text-lg tracking-tight text-text focus-visible:outline-none"
        >
          Shubham<span className="text-primary">_</span>Awasthi
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-text after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-muted hover:text-text transition-colors"
          >
            <Github size={18} strokeWidth={1.75} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted hover:text-text transition-colors"
          >
            <Linkedin size={18} strokeWidth={1.75} />
          </a>
          <a
            href={resumeUrl}
            download
            className="inline-flex items-center gap-1.5 text-sm font-medium border border-border rounded-full pl-4 pr-3 py-2 text-text hover:border-primary/60 hover:text-primary transition-colors"
          >
            Resume
            <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden text-text p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-bg border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base text-text/90 border-b border-border/60 last:border-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-5 px-6 pb-6">
              <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-muted">
                <Github size={20} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-muted">
                <Linkedin size={20} />
              </a>
              <a
                href={resumeUrl}
                download
                className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium border border-border rounded-full px-4 py-2 text-text"
              >
                Resume <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
