import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GeneralInfo from './components/GeneralInfo'
import HazardID from './components/HazardID'
import UserGuide from './components/UserGuide'
import SelfCheck from './components/SelfCheck'
import About from './components/About'
import References from './components/References'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <GeneralInfo />
        <HazardID />
        <UserGuide />
        <SelfCheck />
        <About />
        <References />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} ChemSafe — Educational use only
      </footer>
    </div>
  )
}

export default App
