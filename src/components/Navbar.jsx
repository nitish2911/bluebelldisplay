import { useEffect, useState } from "react"
import logo from "../assets/images/logo_new.png"

export default function Navbar() {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > window.innerHeight - 120)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`navbar ${sticky ? "navbar-sticky" : ""}`}>
      <div
        className="navbar-left"
        style={{ cursor: "pointer" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={logo} alt="Bluebell Display" />
      </div>

      <div className="navbar-right">
        <a href="#services">What We Do</a>
        <a href="#projects">Projects</a>
        <a href="#industries">Industries</a>
        <a href="#process">Process</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#contact" className="navbar-cta">
          Get in Touch
        </a>
      </div>
    </nav>
  )
}
