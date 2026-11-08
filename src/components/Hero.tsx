import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Users, FileText } from 'lucide-react'
import { isWebGLAvailable } from '../lib/webgl'

const HeroScene = lazy(() => import('./three/HeroScene'))

const webglSupported = typeof window !== 'undefined' && isWebGLAvailable()

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden pb-24 pt-28 lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 text-center lg:grid-cols-2 lg:gap-16 lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 rounded-full border border-surface-border bg-canvas/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ice"
          >
            Lista studentesca · Elezioni 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl"
            style={{ textShadow: '0 0 60px rgba(59, 130, 246, 0.35)' }}
          >
            <span className="text-gradient">4Real</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            Concretezza, trasparenza, rappresentanza reale.
            <br className="hidden sm:block" /> Quattro studenti, un solo impegno: la vostra voce.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 hidden flex-col gap-4 sm:flex sm:flex-row lg:self-start"
          >
            <a
              href="#squadra"
              className="group flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:scale-105 hover:bg-primary-bright active:scale-95"
            >
              <Users size={18} className="transition-transform group-hover:-translate-y-0.5" />
              La Squadra
            </a>
            <a
              href="#programma"
              className="flex items-center justify-center gap-2 rounded-full border border-surface-border bg-canvas/60 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:border-primary/50 hover:bg-white/10 active:scale-95"
            >
              <FileText size={18} className="text-ice" />
              Il Programma
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="relative h-72 w-full sm:h-96 lg:h-[560px]"
        >
          {webglSupported ? (
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          ) : (
            <div className="flex h-full items-center justify-center opacity-40">
              <div className="h-48 w-48 animate-pulse-slow rounded-full bg-primary blur-[90px]" />
            </div>
          )}
        </motion.div>
      </div>

      <motion.a
        href="#squadra"
        aria-label="Scorri alla sezione squadra"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 z-10 text-ink-dim transition-colors hover:text-ice"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  )
}
