import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { portfolioImages, homeImages } from '../utils/imageImports'
import OptimizedImage from '../components/OptimizedImage'
import '../styles/Portfolio.css'

function Portfolio() {
  // Preload das primeiras 3 imagens críticas
  useEffect(() => {
    const criticalImages = [
      portfolioImages.mockupMinerva,
      portfolioImages.sima,
      portfolioImages.mockupPex
    ]
    
    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })
  }, [])

  const projects = [
    {
      id: 0,
      title: "Minerva",
      description: "Production scenario optimizer for Bayer.",
      tech: "React | TypeScript | Next.js | Nest | AWS",
      image: portfolioImages.mockupMinerva,
      link: ""
    },
    {
      id: 1,
      title: "Sima Engenharia",
      description: "Low code app for equipment management.",
      tech: "Figma | Power Apps | Power Fx (lang)",
      image: portfolioImages.sima,
      link: ""
    },
    {
      id: 2,
      title: "Moodle PEX",
      description: "Redesign and Front-end for Distance Learning App (UFPB).",
      tech: "Figma | HTML | CSS | JS | PHP",
      image: portfolioImages.mockupPex,
      link: "https://pex.sead.ufpb.br/login/index.php"
    },
    {
      id: 3,
      title: "Moodle Classes",
      description: "Redesign and Front-end for Distance Learning App (UFPB).",
      tech: "Figma | HTML | CSS | JS | PHP",
      image: portfolioImages.mockupClasses,
      link: "https://classes.sead.ufpb.br/login/index.php"
    },
    {
      id: 4,
      title: "ONE alpha",
      description: "Management system for Bayer.",
      tech: "JS | jQuery | AJAX | Bootstrap | Sharepoint",
      image: portfolioImages.bayer33,
      link: ""
    },
    {
      id: 5,
      title: "React App",
      description: "Web App that manages an attendance list.",
      tech: "ReactJS | TypeScript | HTML | CSS | JS",
      image: portfolioImages.listaPresenca,
      link: "https://github.com/RubenFontes/react-app"
    },
    {
      id: 6,
      title: "UFPB Labs",
      description: "Web design project for UFPB laboratory pages.",
      tech: "Figma | Adobe XD",
      image: portfolioImages.laboratoriosUfpb,
      link: "https://www.behance.net/gallery/159902271/Labs-UFPB"
    },
    {
      id: 7,
      title: "Chatbot Dorinha",
      description: "EaD support chatbot (UFPB).",
      tech: "NodeJS | ExpressJS | DialogFlow | HTML | CSS",
      image: portfolioImages.dorinhaChatbot,
      link: "https://github.com/RubenFontes/dialogflow-messenger-integration"
    },
    {
      id: 8,
      title: "Todo App",
      description: "Web task manager.",
      tech: "NodeJS | MySQL | Sequelize | Handlebars | HTML | CSS | JS",
      image: portfolioImages.todoApp,
      link: "https://github.com/RubenFontes/todo-app"
    },
    {
      id: 9,
      title: "ArtStage",
      description: "Website for publishing artistic works.",
      tech: "Figma | WordPress | Elementor | PHP | MySQL",
      image: portfolioImages.artStage,
      link: "https://github.com/RubenFontes/ArtStage"
    },
    {
      id: 10,
      title: "Pedido Expresso",
      description: "SPA with data persistence.",
      tech: "Vue | Node.js | Selenium",
      image: portfolioImages.mockupVue,
      link: "https://github.com/RubenFontes/pulcher-code-challenge"
    },
    {
      id: 11,
      title: "Advocatta EJ",
      description: "Web design project for the junior company Advocatta.",
      tech: "Figma | Adobe XD",
      image: portfolioImages.advocatta,
      link: "https://advocatta.org"
    },
    {
      id: 12,
      title: "JHR Agro",
      description: "Web design project for JHR Agro farm landing page.",
      tech: "Figma | Adobe XD",
      image: portfolioImages.jhrAgro,
      link: "https://jhragro.com"
    }
  ]

  useEffect(() => {
    const handleAnimation = () => {
      const elementos = document.querySelectorAll(".animacao")
      
      elementos.forEach((elemento) => {
        const rect = elemento.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          elemento.classList.add("animated")
        } else {
          elemento.classList.remove("animated")
        }
      })
    }

    window.addEventListener("load", handleAnimation)
    window.addEventListener("scroll", handleAnimation)

    return () => {
      window.removeEventListener("load", handleAnimation)
      window.removeEventListener("scroll", handleAnimation)
    }
  }, [])

  const handleFigureHover = (figureId, isHovering) => {
    const figcaption = document.getElementById(`figcaption-${figureId}`)
    if (figcaption) {
      figcaption.style.display = isHovering ? "none" : "block"
    }
  }

  return (
    <main className="portfolio-page">
      <div className="animacao">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg>
        </Link>
      </div>
    
      <header className="animacao">
        <h1>Projects</h1>
        <p>A sample of my main dev works.<br/>
          For Design works, visit: <a href="https://www.behance.net/rbenf">Ruben Fontes on <span id="linkbehance">Behance</span></a>
        </p>
      </header>
    
      <section className="gallery" id="gallery">
        {projects.map((project) => (
          <article key={project.id} className="animacao">
            <figure id={`figure-${project.id}`}>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <OptimizedImage 
                    src={project.image} 
                    alt={project.title} 
                    className="gallery-image"
                    priority={project.id < 3}
                    onMouseOver={() => handleFigureHover(project.id, true)}
                    onMouseOut={() => handleFigureHover(project.id, false)}
                  />
                </a>
              ) : (
                <OptimizedImage 
                  src={project.image} 
                  alt={project.title} 
                  className="gallery-image"
                  priority={project.id < 3}
                  onMouseOver={() => handleFigureHover(project.id, true)}
                  onMouseOut={() => handleFigureHover(project.id, false)}
                />
              )}
              <figcaption id={`figcaption-${project.id}`}>
                <p><strong>{project.title}</strong>: {project.description}<br/></p>
                <p>{project.tech}</p>
              </figcaption>
            </figure>
          </article>
        ))}
      </section>

      {/* Dialogflow web-messenger integration */}
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent=""
        chat-title="Talk to me"
        agent-id="19a428a1-40f9-48bf-ab4e-812782e559cc"
        chat-icon={homeImages.chatIcon}
        language-code="pt-BR">
      </df-messenger>
    </main>
  )
}

export default Portfolio
