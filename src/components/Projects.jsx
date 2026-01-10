import { motion } from "framer-motion"
import { useState } from "react"

import project1 from "../assets/images/image1.jpeg"
import project2 from "../assets/images/image2.jpeg"
import project3 from "../assets/images/image3.jpeg"


const projects = [
  {
    title: "Retail Store Display",
    tag: "Retail",
    image: project1
  },
  {
    title: "Brand Launch Installation",
    tag: "Branding",
    image: project2
  },
  {
    title: "Exhibition Pavilion",
    tag: "Exhibition",
    image: project3
  }
]


export default function Projects() {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length)
  }

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    )
  }

  return (
    <section id="projects" style={styles.wrapper}>
      <h2 id="projects" style={styles.heading}>
        Selected Projects
      </h2>

      <p style={styles.subheading}>
        A snapshot of our recent work across retail and exhibitions.
      </p>

      <div style={styles.slider}>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={styles.slide}
        >
          <div style={styles.imageWrapper}>
            <img
              src={projects[index].image}
              alt={projects[index].title}
              style={styles.image}
            />
            <span style={styles.tag}>{projects[index].tag}</span>
          </div>

          <h3 style={styles.title}>
            {projects[index].title}
          </h3>
        </motion.div>
      </div>

      <div style={styles.controls}>
        <button onClick={prev} style={styles.controlBtn}>←</button>
        <button onClick={next} style={styles.controlBtn}>→</button>
      </div>
    </section>
  )
}

const styles = {
  wrapper: {
    padding: "7rem 8vw",
    background: "var(--primary)"
  },


  heading: {
    fontSize: "2.4rem",
    fontWeight: 700
  },

  subheading: {
    marginTop: "1rem",
    maxWidth: "520px",
    color: "var(--text-secondary)"
  },

  slider: {
    marginTop: "4rem",
    position: "relative",
    maxWidth: "720px"
  },

  slide: {
    background: "rgba(255,255,255,0.04)",
    borderRadius: "14px",
    padding: "2rem",
    border: "1px solid rgba(255,255,255,0.06)"
  },

  imageWrapper: {
    position: "relative",
    height: "260px",
    overflow: "hidden",
    borderRadius: "10px"
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },


  tag: {
    background: "var(--accent)",
    color: "#000",
    fontSize: "0.75rem",
    fontWeight: 600,
    padding: "0.3rem 0.6rem",
    borderRadius: "6px"
  },

  title: {
    marginTop: "1.5rem",
    fontSize: "1.3rem",
    fontWeight: 600
  },

  controls: {
    marginTop: "2rem",
    display: "flex",
    gap: "1rem"
  },

  controlBtn: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "var(--text-primary)",
    padding: "0.6rem 1rem",
    borderRadius: "8px",
    fontSize: "1rem"
  }
}
