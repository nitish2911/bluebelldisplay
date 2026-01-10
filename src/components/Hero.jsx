import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import hero1 from "../assets/images/hero1.png"
import hero2 from "../assets/images/hero2.png"
import hero3 from "../assets/images/hero3.png"
import hero4 from "../assets/images/hero4.png"

const images = [hero1, hero2, hero3, hero4]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      {/* Background slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="hero-bg"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <h1>
          Designing Displays<br />That Sell
        </h1>

        <p>
          Precision-engineered retail, exhibition, and brand display solutions.
        </p>

        <button
          onClick={() => {
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth"
            })
          }}
        >
          View Our Work
        </button>

      </div>
    </section>
  )
}
