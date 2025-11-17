import { Router } from "express";
import * as todoController from "../modules/todo/todo.controller.js";

const router = Router();

router.get("/getAll", todoController.getAll);

export default router;
