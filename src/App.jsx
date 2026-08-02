import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Timeline from './components/Timeline.jsx'
import Portfolio from './components/Portfolio.jsx'
import Testimonials from './components/Testimonials.jsx'
import Posts from './components/Posts.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

export default function App() {
  const [activeSection, setActiveSection] = useState('start')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-accent-950 transition-colors duration-300">
        <ScrollProgress />
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Timeline />
          <Portfolio />
          <Testimonials />
          <Posts />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
