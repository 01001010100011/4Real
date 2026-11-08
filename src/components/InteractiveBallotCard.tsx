import { useState, type PointerEvent } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useFinePointer } from '../lib/useFinePointer'

const CHECKBOX_SIZE = 36
const FIRST_DRAW_DELAY = 0.6

export default function InteractiveBallotCard() {
  const [drawId, setDrawId] = useState(0)
  const [flash, setFlash] = useState(false)
  const [isFirstDraw, setIsFirstDraw] = useState(true)
  const fine = useFinePointer()

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), {
    stiffness: 180,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), {
    stiffness: 180,
    damping: 20,
  })
  const sheenX = useTransform(mx, (v) => `${v * 100}%`)
  const sheenY = useTransform(my, (v) => `${v * 100}%`)
  const sheen = useTransform(
    [sheenX, sheenY] as const,
    ([x, y]: readonly string[]) =>
      `radial-gradient(360px circle at ${x} ${y}, rgba(91, 156, 255, 0.10), transparent 60%)`,
  )

  const redraw = () => {
    setFlash(false)
    setIsFirstDraw(false)
    setDrawId((id) => id + 1)
  }

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  const onPointerLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  const baseDelay = isFirstDraw ? FIRST_DRAW_DELAY : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
      style={{ perspective: 1000 }}
      className="w-full max-w-sm"
    >
      <motion.div
        onPointerMove={fine ? onPointerMove : undefined}
        onPointerLeave={fine ? onPointerLeave : undefined}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="glass relative overflow-visible p-5 shadow-glow-lg sm:p-6"
      >
        {/* sheen che segue il cursore */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ background: sheen }}
        />

        {/* Intestazione */}
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-ink-muted sm:text-[11px]">
              Scheda Elettorale
            </p>
            <p className="mt-1 text-[11px] text-ink-dim sm:text-xs">
              Istituto Superiore · Consulta Studentesca
            </p>
          </div>
          <span className="font-mono text-sm font-bold text-primary-bright sm:text-base">
            {new Date().getFullYear()}
          </span>
        </div>

        {/* Riquadro di voto */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Ridisegna la X di voto sulla scheda"
          onClick={redraw}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              redraw()
            }
          }}
          className="group relative mt-5 cursor-pointer overflow-hidden rounded-xl border border-primary/30 p-4 transition-colors duration-300 hover:border-primary/60 sm:p-5"
          style={{
            transform: 'translateZ(28px)',
            backgroundImage:
              'repeating-linear-gradient(-45deg, rgba(148, 180, 255, 0.05) 0px, rgba(148, 180, 255, 0.05) 1px, transparent 1px, transparent 9px)',
          }}
        >
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Casella con X animata */}
            <motion.div
              animate={{
                boxShadow: flash
                  ? '0 0 26px rgba(91, 156, 255, 0.85), 0 0 6px rgba(91, 156, 255, 0.6)'
                  : '0 0 0px rgba(91, 156, 255, 0)',
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex shrink-0 items-center justify-center rounded-md border-2 border-ink-muted/60 bg-canvas/70 transition-colors duration-300 group-hover:border-ice"
              style={{ width: CHECKBOX_SIZE, height: CHECKBOX_SIZE }}
            >
              <svg
                key={drawId}
                viewBox="0 0 36 36"
                className="h-full w-full p-1.5"
                style={{ filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.9))' }}
              >
                <motion.path
                  d="M 5 5 L 31 31"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.32, delay: baseDelay, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M 31 5 L 5 31"
                  fill="none"
                  stroke="#5B9CFF"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.32, delay: baseDelay + 0.22, ease: 'easeInOut' }}
                  onAnimationComplete={() => {
                    setFlash(true)
                    window.setTimeout(() => setFlash(false), 900)
                  }}
                />
              </svg>
            </motion.div>

            {/* Dicitura lista */}
            <div className="min-w-0">
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.35em] text-ink-dim sm:text-[10px]">
                Lista
              </p>
              <p className="font-display mt-0.5 truncate text-2xl font-extrabold tracking-tight sm:text-3xl">
                4<span className="text-primary-bright">Real</span>
              </p>
              <p className="mt-1 text-[11px] leading-snug text-ink-muted sm:text-xs">
                Concretezza · Trasparenza · Rappresentanza reale
              </p>
            </div>
          </div>
        </div>

        {/* Footer della scheda */}
        <div className="relative mt-5 border-t border-dashed border-surface-border pt-4">
          <p className="pr-20 text-xs font-medium italic text-ink-muted sm:text-sm">
            “Metti una X. Al resto ci pensiamo noi.”
          </p>
        </div>

        {/* Badge sticker luminoso */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: -12 }}
          transition={{ type: 'spring', stiffness: 260, damping: 16, delay: baseDelay + 0.7 }}
          className="absolute -bottom-4 -right-3 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-primary/50 bg-gradient-to-br from-primary-deep to-primary shadow-glow sm:h-20 sm:w-20"
          style={{ transform: 'translateZ(40px)' }}
        >
          <span className="text-center font-mono text-[9px] font-extrabold uppercase leading-tight tracking-widest text-white sm:text-[10px]">
            Vota
            <br />
            4Real
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
