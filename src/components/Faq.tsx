import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqItems } from '../data/content'
import SectionHeading from './ui/SectionHeading'
import { isFinePointer } from '../lib/useFinePointer'
import InteractiveBallotCard from './InteractiveBallotCard'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const reveal = isFinePointer()

  return (
    <section id="faq" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Domande <span className="text-gradient">frequenti</span>
          </>
        }
        subtitle="Tutto quello che vuoi sapere su di noi, in poche risposte dirette."
      />

      <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={item.question}
                initial={reveal ? { opacity: 0, y: 20 } : false}
                whileInView={reveal ? { opacity: 1, y: 0 } : undefined}
                viewport={reveal ? { once: true, margin: '-40px' } : undefined}
                transition={reveal ? { duration: 0.45, delay: i * 0.06 } : undefined}
                className={`glass overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'border-primary/40' : ''
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold sm:text-base">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? 'border-primary/50 bg-primary/15 text-primary-bright'
                        : 'border-surface-border text-ink-muted'
                    }`}
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <div id="vota" className="flex justify-center lg:sticky lg:top-28">
          <InteractiveBallotCard />
        </div>
      </div>
    </section>
  )
}
