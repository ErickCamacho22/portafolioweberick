
import NavBar from "../components/NavBar";
import "../styles/projects.css";
import { Link } from "react-router-dom";
import { usePosts } from "../context/postContext";
import { ProjectCard } from "../components/ProjectCard";

export function Projects() {

  const { posts } = usePosts();

  if (posts.length === 0) return (
    <div>
      <h1>There are no Posts</h1>
    </div>
  )


  return (
    <>
      <NavBar />


      <div className="containerProjects">
        <h1>Projects </h1>


        <div className="">
          {posts.map(post => (
            <ProjectCard post={post} key={post._id} />
          )
          )}

        </div>
      </div>
    </>
  );
}
