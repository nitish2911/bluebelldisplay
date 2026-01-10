import './styles/global.css'
import './styles/variables.css'

import Industries from "./components/Industries"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'
import About from "./components/About"


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Industries />
      <Process />
      <About />
      <Contact />
    </>
  )
}