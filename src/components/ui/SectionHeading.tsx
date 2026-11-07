import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  subtitle?: string
}

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary-bright">
        {eyebrow}
      </span>
      <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-ink-muted">{subtitle}</p>}
    </motion.div>
  )
}
