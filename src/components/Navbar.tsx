import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-4xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled || open
            ? 'border border-surface-border bg-canvas/95 shadow-lg'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <a href="#top" aria-label="4Real — torna in cima" className="flex items-center">
          <Logo className="h-8 w-8 text-primary-deep" glow />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#vota"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 active:scale-95"
          >
            Vota 4Real
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white/5 text-ink-muted transition-colors hover:text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="absolute inset-x-4 top-[88px] rounded-2xl border border-surface-border bg-surface-solid p-4 shadow-lg md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-ink-muted transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#vota"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-glow"
            >
              Vota 4Real
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
