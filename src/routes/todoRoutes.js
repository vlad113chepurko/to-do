import { Router } from "express";
import * as todoController from "../modules/todo/todo.controller.js";

const router = Router();

router.get("/", todoController.getAll);
router.post("/", todoController.create);

export default router;
