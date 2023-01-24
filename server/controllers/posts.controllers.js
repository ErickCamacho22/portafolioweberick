import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra";
import Post from "../models/Apps.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description, repo } = req.body;
    let image;

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
      await fs.remove(req.files.image.tempFilePath);
    }

    const newPost = new Post({ title, description, repo, image });

    await newPost.save();

    return res.send(newPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.send(updatedPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postRemoved = await Post.findByIdAndDelete(req.params.id);
    if (!postRemoved) return res.sendStatus(404);
    if (postRemoved.image.public_id) {
      await deleteImage(postRemoved.image.public_id);
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getIdPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.sendStatus(404);
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
