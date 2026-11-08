import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Program from './components/Program'
import Faq from './components/Faq'
import Footer from './components/Footer'
import AccessGate from './components/AccessGate'
import { expectedHash, isUnlocked } from './lib/access'

export default function App() {
  const expected = expectedHash()
  const [unlocked, setUnlocked] = useState(() => isUnlocked(expected))

  if (!unlocked) {
    return <AccessGate expected={expected as string} onUnlock={() => setUnlocked(true)} />
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
