import "../styles/projectEditing.css"
import toast from "react-hot-toast"
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom"

export function ProjectEditing({ post }) {

  const { deleteProject } = usePosts();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p>¿Estas seguro que quieres eliminar?<strong>{id}</strong></p>
        <div>
          <button className="delete" onClick={() => {
            deleteProject(id);
            toast.dismiss(t.id)
          }}>Eliminar</button>
          <button className="edit" onClick={() => toast.dismiss(t.id)}>Cancelar</button>
        </div>
      </div>
    ), {
      style: {
        background: "#f5f5f5"
      }
    })
  };

  return (
    <div className="projectEdit">
      <figure className="card1">
        {post.image && <img src={post.image.url} alt="Project Img" />}
        <div className="description1">
          <h3>{post.title}</h3>
        </div>
      </figure>
      <button className="edit"
        onClick={() => {

          navigate(`/NewProject/posts/${post._id}`)

        }}
      >
        Editar
      </button>
      <button className="delete"
        onClick={() => handleDelete(post._id)}
      >
        Eliminar
      </button>
    </div>
  )
}
