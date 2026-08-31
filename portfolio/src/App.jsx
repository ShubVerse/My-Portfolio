import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import DesignShowcase from './components/DesignShowcase.jsx'
import Timeline from './components/Timeline.jsx'
import ResumeCTA from './components/ResumeCTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-bg text-text font-body min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DesignShowcase />
        <Timeline />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
