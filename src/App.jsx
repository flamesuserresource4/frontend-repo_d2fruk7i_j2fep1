import Hero from './components/Hero'
import Values from './components/Values'
import Visuals from './components/Visuals'
import ProjectDetails from './components/ProjectDetails'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-tight">Budaörs Industrial Logistics Center</div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#values" className="hover:text-slate-900">Features</a>
            <a href="#details" className="hover:text-slate-900">Details</a>
            <a href="#location" className="hover:text-slate-900">Location</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="values"><Values /></div>
        <Visuals />
        <div id="details"><ProjectDetails /></div>
        <Location />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
