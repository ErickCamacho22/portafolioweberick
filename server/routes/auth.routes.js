import { Router } from "express";
import * as authCtrl from "../controllers/auth.controllers.js";
import * as verifySingup from "../middlewares/verifySingup.js";
const router = Router();

router.post(
  "/signup",
  verifySingup.checkDuplicateUsernameOrEmail,
  verifySingup.checkRolesExisted,
  authCtrl.singUp
);

router.post("/signin", authCtrl.singIn);

export default router;
