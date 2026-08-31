import { Github, Linkedin, Mail } from 'lucide-react'
import { socialLinks } from '../data/nav.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-content mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-medium text-text">Shubham Awasthi</p>
          <p className="text-sm text-muted">Frontend Developer &amp; UI/UX Designer</p>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/ShubVerse" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-muted hover:text-text transition-colors">
            <Github size={17} strokeWidth={1.75} />
          </a>
          <a href="https://www.linkedin.com/in/shubham5851/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-muted hover:text-text transition-colors">
            <Linkedin size={17} strokeWidth={1.75} />
          </a>
          <a href="mailto:shubhamofficial0908@gmail.com" aria-label="Send email" className="text-muted hover:text-text transition-colors">
            <Mail size={17} strokeWidth={1.75} />
          </a>
        </div>

        <p className="font-mono text-xs text-muted">&copy; {year} Shubham Awasthi</p>
      </div>
    </footer>
  )
}
