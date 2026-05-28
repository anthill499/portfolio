import { useDarkMode } from './hooks/useDarkMode'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Resume } from './components/Resume'
import { Projects } from './components/Projects'
import './App.css'

export default function App() {
  const [isDark, toggleDark] = useDarkMode()

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <Hero />
      <About />
      <Resume />
      <Projects />
    </div>
  )
}
