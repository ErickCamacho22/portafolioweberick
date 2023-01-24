import { useState, useContext, createContext, useEffect } from "react"
import { getPostsRequests, createProjectRequest, deleteProjectRequest, getPostRequests, updateProjectRequest } from "../api/post";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context
}
export const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const res = await getPostsRequests()
    setPosts(res.data)
  }

  const createProject = async (post) => {
    const res = await createProjectRequest(post)
    setPosts([...posts, res.data])
  }

  const deleteProject = async (id) => {
    const res = await deleteProjectRequest(id);
    if (res.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  }

  const getPost = async (id) => {
    const res = await getPostRequests(id)
    return res
  }

  const updateProject = async (id, post) => {
    const res = await updateProjectRequest(id, post)
    setPosts(posts.map((post) => (post._id === id ? res.data : post)))
  }

  useEffect(() => {
    getPosts()
  }, []);

  return <postContext.Provider value={{
    posts,
    getPosts,
    createProject,
    deleteProject,
    getPost,
    updateProject
  }}>
    {children}
  </postContext.Provider>
}