import { motion } from "framer-motion";
import { ArrowUpRight, Github, LayoutPanelTop } from "lucide-react";

export default function ProjectCard({ project, reverse, onOpenCaseStudy }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Visual preview */}
      <div className="corner-brackets group relative aspect-[4/3] rounded-2xl border border-border bg-surface overflow-hidden">
        {project.image ? (
          <img
            src="/Brain-Brust.png"
            alt={`${project.name} preview`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 dot-grid flex flex-col items-center justify-center gap-3 text-muted">
            <LayoutPanelTop size={30} strokeWidth={1.4} />
            <span className="font-mono text-xs">
              [Add project preview image]
            </span>
          </div>
        )}

        <span className="absolute top-4 left-4 font-mono text-xs text-muted bg-bg/70 backdrop-blur px-2 py-1 rounded-md border border-border">
          {project.index}
        </span>
      </div>

      {/* Content */}
      <div>
        <p className="section-tag text-primary mb-3">{project.tagline}</p>

        <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-4">
          {project.name}
        </h3>

        <p className="text-muted leading-relaxed mb-6">
          {project.description}
        </p>

        <ul className="space-y-2 mb-6">
          {project.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5 text-sm text-text/85"
            >
              <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-xs text-muted border border-border rounded-full px-3 py-1.5"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://shubverse.github.io/Brain-Brust/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full bg-primary text-bg text-sm font-medium px-5 py-3 transition-transform hover:-translate-y-0.5"
          >
            Live Demo
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href="https://github.com/ShubVerse/Brain-Brust"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border text-sm font-medium px-5 py-3 hover:border-primary/60 hover:text-primary transition-colors"
          >
            <Github size={15} />
            GitHub
          </a>

          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="text-sm font-medium text-muted hover:text-text underline underline-offset-4 decoration-border hover:decoration-primary transition-colors"
          >
            View case study
          </button>
        </div>
      </div>
    </motion.article>
  );
}