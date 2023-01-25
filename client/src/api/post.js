import axios from "axios";

export const getPostsRequests = async () =>
  await axios.get("https://portafolioweberick.vercel.app/posts");

export const createProjectRequest = async (post) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }
  return await axios.post("https://portafolioweberick.vercel.app/posts", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteProjectRequest = async (id) =>
  await axios.delete("https://portafolioweberick.vercel.app/posts/" + id);

export const getPostRequests = async (id) =>
  await axios.get("https://portafolioweberick.vercel.app/posts/" + id);

export const updateProjectRequest = async (id, newFields) =>
  await axios.put(
    `https://portafolioweberick.vercel.app/posts/${id}`,
    newFields
  );
