import { Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react'
import { election } from '../data/content'

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: MessageCircle, label: 'TikTok', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-surface-border">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12">
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-white/5 text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-ice hover:shadow-glow"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="font-display text-2xl font-extrabold tracking-tight">
            4<span className="text-primary-bright">Real</span>
          </p>
          <p className="mt-2 text-xs text-ink-dim">
            Concretezza · Trasparenza · Rappresentanza reale
          </p>
        </div>

        <p className="text-xs text-ink-dim">
          © {new Date().getFullYear()} 4Real — Lista n. {election.listNumber} · {election.body} {election.year}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  )
}
