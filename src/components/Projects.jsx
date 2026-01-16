import { useState } from "react"
import Reveal from "./Reveal"

import ex1 from "../assets/images/projects/exhibition-1/1.png"
import ex2 from "../assets/images/projects/exhibition-1/2.png"
import ex3 from "../assets/images/projects/exhibition-1/3.png"
import ex4 from "../assets/images/projects/exhibition-1/4.png"
import ex5 from "../assets/images/projects/exhibition-1/5.png"


import qsr1 from "../assets/images/projects/qsr-1/1.png"
import qsr2 from "../assets/images/projects/qsr-1/2.png"
import qsr3 from "../assets/images/projects/qsr-1/3.png"
import qsr4 from "../assets/images/projects/qsr-1/4.png"

export default function Projects() {
  const [lightbox, setLightbox] = useState({
    open: false,
    images: [],
    index: 0,
  })

  const openLightbox = (images, index) => {
    setLightbox({ open: true, images, index })
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightbox({ ...lightbox, open: false })
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }))
  }

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index:
        (prev.index - 1 + prev.images.length) % prev.images.length,
    }))
  }

  return (
    <>
      <section id="projects" className="projects">
        <Reveal>
          <h2>Our Projects</h2>
          <p className="projects-subtitle">
            A selection of exhibition and kiosk projects delivered across India.
          </p>
        </Reveal>

        <div className="projects-list">
          <Reveal delay={0.1}>
            <ProjectCard
              title="Corporate Exhibition Stall"
              category="Exhibition"
              images={[ex1, ex2, ex3 ,ex4 ,ex5]}
              onImageClick={openLightbox}
            />
          </Reveal>

          <Reveal delay={0.2}>
            <ProjectCard
              title="QSR Food Kiosk"
              category="Food & QSR"
              images={[qsr1, qsr2 ,qsr3 ,qsr4]}
              onImageClick={openLightbox}
            />
          </Reveal>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div className="lightbox">
          <span className="lightbox-close" onClick={closeLightbox}>
            ✕
          </span>

          <span className="lightbox-nav left" onClick={prevImage}>
            ‹
          </span>

          <img
            src={lightbox.images[lightbox.index]}
            alt="Project"
          />

          <span className="lightbox-nav right" onClick={nextImage}>
            ›
          </span>
        </div>
      )}
    </>
  )
}

function ProjectCard({ title, category, images, onImageClick }) {
  return (
    <div className="project-card">
      <div className="project-images">
        {images.map((img, index) => (
          <div
            key={index}
            className="project-image-wrapper"
            onClick={() => onImageClick(images, index)}
          >
            <img src={img} alt={title} />
            <span className="image-hint">Click to view</span>
          </div>
        ))}
      </div>

      <div className="project-info">
        <span className="project-category">{category}</span>
        <h3>{title}</h3>
      </div>
    </div>
  )
}
