import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import {
  HomePage,
  About,
  Skills,
  Contact,
  Projects,
  Login,
  NewProject,
} from "./pages";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <PostProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newProject" element={<NewProject />} />
          <Route path="/NewProject/posts/:id" element={<NewProject />} />
        </Routes>
        <Toaster />
      </PostProvider>
    </div>
  );
}

export default App;
