import { useEffect, useState } from 'react'

// Il tilt 3D è un'affordance da mouse: su touch il pointermove scatta durante
// lo swipe e ruota le card, dando l'effetto di pagina "decentrata/zoomata".
export function useFinePointer(): boolean {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setFine(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setFine(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return fine
}
