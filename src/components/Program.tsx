import { motion } from 'framer-motion'
import { CalendarDays, GraduationCap, HeartHandshake, Wifi, Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { programItems, type ProgramItem } from '../data/content'
import SectionHeading from './ui/SectionHeading'

const iconMap: Record<ProgramItem['icon'], LucideIcon> = {
  'graduation-cap': GraduationCap,
  'calendar-days': CalendarDays,
  wifi: Wifi,
  'heart-handshake': HeartHandshake,
}

export default function Program() {
  return (
    <section id="programma" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-primary/10 blur-[120px]" />

      <SectionHeading
        eyebrow="Il Programma"
        title={
          <>
            Quattro aree, <span className="text-gradient">azioni concrete</span>
          </>
        }
        subtitle="Niente slogan: ogni punto è misurabile e verrà rendicontato pubblicamente durante il mandato."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {programItems.map((item, i) => {
          const Icon = iconMap[item.icon]
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className={`glass group relative overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-lg ${item.span}`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/15 blur-2xl transition-opacity duration-300 group-hover:opacity-100 md:opacity-0" />

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-surface-border bg-white/5 text-primary-bright shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <Icon size={22} strokeWidth={1.8} />
              </div>

              <h3 className="font-display mt-5 text-xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{item.description}</p>

              <ul className="mt-5 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-ink-muted">
                    <Check size={15} className="shrink-0 text-ice" strokeWidth={2.5} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
