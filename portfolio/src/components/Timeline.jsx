import { motion } from 'framer-motion'
import { GraduationCap, Briefcase } from 'lucide-react'
import SectionLabel from './SectionLabel.jsx'

// Filled in with the details you've shared — adjust dates/titles as needed.
const education = [
  {
    degree: 'MCA',
    institution: 'KIET Group of Institutions, Department of Computer Applications',
    period: '2025–2027',
  },
  {
    degree: 'BCA',
    institution: 'IMS Ghaziabad University Courses Campus',
    period: '2022–2025',
  },
  {
    degree: '12th',
    institution: 'Tomar Children School, Varanasi — CBSE Board',
    period: '2022',
  },
  {
    degree: '10th',
    institution: 'Tomar Children School, Varanasi — CBSE Board',
    period: '2020',
  },
]

const experience = [
  {
    role: 'Summer Intern',
    company: 'Varanasi Municipal Corporation — Single Window Application',
    period: 'Summer 2026 (Jun–Aug)',
  },
]

function TimelineGroup({ title, icon: Icon, rows, tag }) {
  return (
    <div>
      <p className="section-tag text-primary mb-1">{tag}</p>
      <h3 className="font-display text-xl font-medium mb-6 flex items-center gap-2.5">
        <Icon size={19} strokeWidth={1.6} className="text-muted" />
        {title}
      </h3>
      <ol className="relative border-l border-border pl-6 space-y-8">
        {rows.map((row, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-bg" />
            <p className="font-mono text-xs text-muted mb-1">{row.period}</p>
            <p className="font-display text-base font-medium text-text">
              {row.degree || row.role}
            </p>
            <p className="text-sm text-muted">{row.institution || row.company}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionLabel path="Experience" index="06" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-14"
        >
          Education &amp; experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14">
          <TimelineGroup title="Education" icon={GraduationCap} rows={education} tag="learning/" />
          <TimelineGroup title="Experience" icon={Briefcase} rows={experience} tag="work/" />
        </div>
      </div>
    </section>
  )
}
