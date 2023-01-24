import { Router } from "express";
import * as postsCtrl from "../controllers/posts.controllers.js";

const router = Router();

router.get("/posts", postsCtrl.getPosts);

// router.post("/posts", [authJwt.verifyToken], postsCtrl.createPost);

// router.put("/posts/:id", [authJwt.verifyToken], postsCtrl.updatePost);

// router.delete("/posts/:id", [authJwt.verifyToken], postsCtrl.deletePost);
router.post("/posts", postsCtrl.createPost);

router.put("/posts/:id", postsCtrl.updatePost);

router.delete("/posts/:id", postsCtrl.deletePost);

router.get("/posts/:id", postsCtrl.getIdPost);

export default router;
