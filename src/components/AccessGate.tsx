import { useState } from 'react'
import type { FormEvent } from 'react'
import { STORAGE_KEY, sha256Hex } from '../lib/access'

export default function AccessGate({
  expected,
  onUnlock,
}: {
  expected: string
  onUnlock: () => void
}) {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [busy, setBusy] = useState(false)

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (busy) return
    setBusy(true)
    const hash = await sha256Hex(code.trim())
    if (hash === expected) {
      try {
        localStorage.setItem(STORAGE_KEY, hash)
      } catch {
        // senza localStorage il codice verrà richiesto a ogni visita: accettabile
      }
      onUnlock()
    } else {
      setError(true)
      setBusy(false)
    }
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#0b0e11] px-6">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
          Area riservata
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-neutral-100">Accesso membri</h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          Questo spazio è riservato ai membri della lista. Inserisci il codice di accesso per
          continuare.
        </p>
        <input
          type="password"
          value={code}
          onChange={(e) => {
            setCode(e.target.value)
            setError(false)
          }}
          placeholder="Codice di accesso"
          autoFocus
          aria-label="Codice di accesso"
          className="mt-6 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-center font-mono text-sm text-neutral-100 outline-none transition-colors focus:border-white/30"
        />
        {error && <p className="mt-2 text-xs text-red-400">Codice non valido.</p>}
        <button
          type="submit"
          disabled={busy || code.length === 0}
          className="mt-4 w-full rounded-xl bg-neutral-100 px-4 py-3 text-sm font-semibold text-black transition-opacity disabled:opacity-40"
        >
          Accedi
        </button>
        <p className="mt-4 text-[11px] leading-relaxed text-neutral-500">
          Il codice viene memorizzato solo su questo dispositivo: non dovrai reinserirlo le
          prossime volte.
        </p>
      </form>
    </div>
  )
}
