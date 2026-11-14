import { election } from '../data/content'
import Logo from './Logo'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="relative border-t border-surface-border">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <Logo className="h-11 w-11 text-primary-deep" glow />
            <p className="font-display text-2xl font-extrabold tracking-tight">
              4<span className="text-primary-deep">Real</span>
            </p>
          </div>
          <p className="mt-2 text-xs text-ink-dim">
            Concretezza · Trasparenza · Rappresentanza reale
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim">
            Seguici su
          </p>
          <SocialLinks withHandles />
        </div>

        <p className="text-xs text-ink-dim">
          © {new Date().getFullYear()} 4Real — Lista n. {election.listNumber} · {election.body} {election.year}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  )
}
