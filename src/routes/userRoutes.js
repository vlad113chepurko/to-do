import { Router } from "express";
import * as userController from "../modules/user/user.controller.js";

const router = Router();

router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);

export default router;
