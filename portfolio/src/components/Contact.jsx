import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import SectionLabel from './SectionLabel.jsx'
import { socialLinks } from '../data/nav.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend wired up yet — this opens a prefilled email as a sensible default.
    // Replace with a real form handler (e.g. an API route or a form service) when ready.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `${socialLinks.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionLabel path="Contact" index="07" />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
              Let&rsquo;s work together
            </h2>
            <p className="text-muted leading-relaxed max-w-sm mb-10">
              Have a project in mind or just want to say hello? My inbox is open.
            </p>

            <ul className="space-y-4">
              <li>
                <a href={`mailto:${socialLinks.email}`} className="flex items-center gap-3 text-sm text-text/90 hover:text-primary transition-colors">
                  <Mail size={17} strokeWidth={1.75} />
                  {socialLinks.email}
                </a>
              </li>
              <li>
                <a href="https://github.com/shubVerse" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-text/90 hover:text-primary transition-colors">
                  <Github size={17} strokeWidth={1.75} />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shubham5851/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-text/90 hover:text-primary transition-colors">
                  <Linkedin size={17} strokeWidth={1.75} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-muted mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                className="w-full rounded-xl border border-border bg-surface/60 px-4 py-3.5 text-sm text-text placeholder:text-muted/60 focus-visible:outline-none focus-visible:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-muted mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                className="w-full rounded-xl border border-border bg-surface/60 px-4 py-3.5 text-sm text-text placeholder:text-muted/60 focus-visible:outline-none focus-visible:border-primary transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-muted mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-surface/60 px-4 py-3.5 text-sm text-text placeholder:text-muted/60 focus-visible:outline-none focus-visible:border-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-bg font-medium text-sm px-6 py-3.5 transition-transform hover:-translate-y-0.5"
            >
              Send Message
              <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
