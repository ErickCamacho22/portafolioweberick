import { Router } from "express";
import * as userCtrl from "../controllers/users.controllers.js";
import * as authJwt from "../middlewares/authJwt.js";
import * as verifySingup from "../middlewares/verifySingup.js";
const router = Router();

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin, verifySingup.checkRolesExisted],
  userCtrl.createUser
);

export default router;
