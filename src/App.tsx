import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Program from './components/Program'
import Faq from './components/Faq'
import Footer from './components/Footer'
import AccessGate from './components/AccessGate'
import DigitalePage from './components/DigitalePage'
import { expectedHash, isUnlocked } from './lib/access'

function routeFromHash(): string {
  const h = window.location.hash
  if (h.startsWith('#/digitale')) return 'digitale'
  return 'home'
}

export default function App() {
  const expected = expectedHash()
  const [unlocked, setUnlocked] = useState(() => isUnlocked(expected))
  const [route, setRoute] = useState(routeFromHash)

  useEffect(() => {
    const onHashChange = () => {
      const next = routeFromHash()
      setRoute(next)
      if (next === 'digitale') {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (!unlocked) {
    return <AccessGate expected={expected as string} onUnlock={() => setUnlocked(true)} />
  }

  if (route === 'digitale') {
    return (
      <div className="relative min-h-dvh">
        <Navbar />
        <DigitalePage />
        <Footer />
      </div>
    )
  }

  return (
    <div className="relative min-h-dvh">
      <Navbar />
      <main>
        <Hero />
        <Team />
        <Program />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
