import { Formik, Form, Field, ErrorMessage } from "formik"
import NavBar from "../components/NavBar"
import { usePosts, } from "../context/postContext"
import { Link, useNavigate, useParams } from "react-router-dom"
import * as Yup from "yup"
import "../styles/newProject.css"
import { ProjectEditing } from "../components/ProjectEditing"
import { useEffect, useState } from "react"

export function NewProject() {

  const { createProject, posts, getPost, updateProject } = usePosts()
  const navigate = useNavigate()
  const params = useParams();

  const [post, setPost] = useState({
    title: "",
    description: "",
    repo: "",
    Image: null
  })

  useEffect(() => {
    (async () => {
      if (params.id) {
        const res = await getPost(params.id);
        setPost(res.data)
      }
    })()
  }, [params.id])

  return (
    <>
      <NavBar />
      <header>
        <h1>Editar proyectos</h1>
      </header>

      <button className="Regresar">
        <Link className="link" to="/projects" >Regresar a proyectos</Link>
      </button>
      <div className="projectContainer">
        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required("Title is Required"),
            description: Yup.string().required("Description is Required"),
            repo: Yup.string().required("Repo is Required"),
          })}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updateProject(params.id, values)
            } else {
              await createProject(values);
              actions.resetForm();
            }
            actions.setSubmitting();
            navigate("/newProject")
            setPost({
              title: "",
              description: "",
              repo: "",
              Image: null
            })
          }}
          enableReinitialize
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit} className="projectForm">
              <label htmlFor="title">Titulo del proyecto</label>
              <Field name="title" className="field" />
              <ErrorMessage component="p" className="errosrMessage" name="title" />

              <label htmlFor="description">Descripción del proyecto</label>
              <Field component="textarea" name="description" className="field" />
              <ErrorMessage component="p" className="errosrMessage" name="description" />

              <label htmlFor="repo">Repositorio del proyecto</label>
              <Field name="repo" className="field" />
              <ErrorMessage component="p" className="errosrMessage" name="repo" />

              <label htmlFor="imagen">Imagen del Proyecto</label>
              <input type="file" name="image" className="selectImage"
                onChange={(e) => setFieldValue("image", e.target.files[0])}
              />

              <button className="butonSave" type="submit">Guardar</button>
            </Form>
          )}

        </Formik>

        <div className="ProjectCards">
          <div className="projectsEdit">
            {posts.map(post => (
              <ProjectEditing post={post} key={post._id} />
            )
            )}

          </div>
        </div>
      </div>


    </>
  )
}
