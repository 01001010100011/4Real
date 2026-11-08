import { useRef, type PointerEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { candidates } from '../data/content'
import SectionHeading from './ui/SectionHeading'
import { useFinePointer } from '../lib/useFinePointer'

function CandidateCard({
  candidate,
  index,
}: {
  candidate: (typeof candidates)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const fine = useFinePointer()
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), {
    stiffness: 200,
    damping: 22,
  })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), {
    stiffness: 200,
    damping: 22,
  })
  const glowX = useTransform(mx, (v) => `${v * 100}%`)
  const glowY = useTransform(my, (v) => `${v * 100}%`)
  const glowBackground = useTransform(
    [glowX, glowY] as const,
    ([x, y]: readonly string[]) =>
      `radial-gradient(320px circle at ${x} ${y}, rgba(59, 130, 246, 0.14), transparent 65%)`,
  )

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  const onPointerLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={ref}
        onPointerMove={fine ? onPointerMove : undefined}
        onPointerLeave={fine ? onPointerLeave : undefined}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="glass group relative overflow-hidden p-6 transition-colors duration-300 hover:border-primary/40"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />

        <div
          className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/50 bg-gradient-to-br from-primary/25 to-transparent text-2xl font-extrabold text-ice shadow-glow transition-all duration-300 group-hover:border-primary group-hover:shadow-glow-lg"
          style={{ transform: 'translateZ(30px)' }}
        >
          {candidate.initials}
        </div>

        <h3
          className="font-display mt-5 text-center text-lg font-bold tracking-tight"
          style={{ transform: 'translateZ(24px)' }}
        >
          {candidate.name}
        </h3>
        <p
          className="mt-1.5 text-center text-sm leading-relaxed text-ink-muted"
          style={{ transform: 'translateZ(16px)' }}
        >
          {candidate.role}
        </p>
        <span
          className="mt-4 block w-fit rounded-full border border-surface-border bg-white/5 px-3 py-1 text-xs font-semibold text-ice mx-auto transition-colors group-hover:border-primary/50"
          style={{ transform: 'translateZ(12px)' }}
        >
          {candidate.tag}
        </span>
      </motion.div>
    </motion.div>
  )
}

export default function Team() {
  return (
    <section id="squadra" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="La Squadra"
        title={
          <>
            Quattro volti, <span className="text-gradient">un impegno solo</span>
          </>
        }
        subtitle="Persone reali, con nome e cognome, che ci mettono la faccia. Ogni membro ha un ruolo preciso e responsabilità pubbliche."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {candidates.map((candidate, i) => (
          <CandidateCard key={candidate.name} candidate={candidate} index={i} />
        ))}
      </div>
    </section>
  )
}
