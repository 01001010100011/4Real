import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Wifi } from 'lucide-react'
import { digitalProjects } from '../data/content'
import { isFinePointer } from '../lib/useFinePointer'

export default function DigitalePage() {
  const reveal = isFinePointer()

  return (
    <div className="relative min-h-dvh">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-hero-radial" />

      <main className="relative mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-40">
        <motion.a
          href="#programma"
          initial={reveal ? { opacity: 0, x: -12 } : false}
          animate={reveal ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={16} />
          Torna al programma
        </motion.a>

        <motion.div
          initial={reveal ? { opacity: 0, y: 24 } : false}
          animate={reveal ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-8"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-white/5 text-primary-bright shadow-glow">
              <Wifi size={20} strokeWidth={1.8} />
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-primary-bright">
              Programma · Tema 01
            </span>
          </div>

          <h1 className="font-display mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Digitalizzazione <span className="text-gradient">reale</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Una scuola più digitale e accessibile a tutti: stessi strumenti e stesse opportunità
            per ogni studente. Non promesse — tre strumenti creati da studenti, già online e già
            usati ogni giorno dai vostri compagni.
          </p>
        </motion.div>

        <div className="mt-14 space-y-5">
          {digitalProjects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={reveal ? { opacity: 0, y: 28 } : false}
              whileInView={reveal ? { opacity: 1, y: 0 } : undefined}
              viewport={reveal ? { once: true, margin: '-40px' } : undefined}
              transition={reveal ? { duration: 0.5, delay: i * 0.08, ease: 'easeOut' } : undefined}
              className="glass group relative overflow-hidden p-7 transition-colors duration-300 hover:border-primary/40"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/15 blur-2xl transition-opacity duration-300 group-hover:opacity-100 md:opacity-0" />

              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-surface-border bg-white/5 px-3 py-1 text-xs font-semibold text-ice">
                  {project.tag}
                </span>
              </div>

              <h2 className="font-display mt-4 text-2xl font-bold tracking-tight">
                {project.name}
              </h2>
              <p className="mt-1 font-mono text-xs text-ink-dim">{project.domain}</p>

              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary-bright transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:shadow-glow focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:outline-none"
              >
                Visita {project.domain}
                <ExternalLink size={15} />
              </a>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  )
}
