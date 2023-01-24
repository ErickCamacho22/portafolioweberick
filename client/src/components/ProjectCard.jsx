import "../styles/projectCard.css"
import Modal from "./Modal"
import { useState } from "react"


export function ProjectCard({ post }) {

  const [mostrar, setMostrar] = useState(false);



  return (
    <>
      <div className="ProjectCards2">
        <div className="projectEdit2">
          <figure className="card2">
            {post.image && <img src={post.image.url} alt="Project Img" />}
            <div className="description2">
              <h3>{post.title}</h3>
              <button className="verProyecto" onClick={() => setMostrar(true)}>
                Ver Proyecto
              </button>
            </div>
          </figure>
        </div>
      </div>
      <Modal isOpen={mostrar}  >
        <header>
          <img src={post.image.url} alt="Project Img" />
        </header>
        <body>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </body>
        <footer>
          <button className='buttonGithub'><a className="project" href={post.repo} target={"_blank"}>
            GitHub
          </a></button>
          <button className='modalClose' onClick={() => setMostrar(false)} >Cerrar</button>
        </footer>
      </Modal>

    </>
  )
}

