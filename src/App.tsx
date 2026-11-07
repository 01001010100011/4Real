import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Program from './components/Program'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
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
