export const STORAGE_KEY = '4real-access-v1'

// Dalle 08:30 del 12/11/2026 (assemblea conclusa) il gate non deve mai più apparire.
export const UNLOCK_AT = Date.parse('2026-11-12T08:30:00+01:00')

export function gateIsOff(): boolean {
  if (import.meta.env.VITE_GATE_OPEN === '1') return true
  return Date.now() >= UNLOCK_AT
}

export function expectedHash(): string | undefined {
  return import.meta.env.VITE_ACCESS_HASH as string | undefined
}

export function isUnlocked(expected: string | undefined): boolean {
  if (!expected) return true
  try {
    return localStorage.getItem(STORAGE_KEY) === expected
  } catch {
    return false
  }
}

export async function sha256Hex(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}
