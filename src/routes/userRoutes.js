import { Router } from "express";
import * as userController from "../modules/user/user.controller.js";

const router = Router();

router.get("/", userController.loginUser);
router.post("/", userController.registerUser);

export default router;
