import { Router } from "express";
import * as todoController from "../modules/todo/todo.controller.js";

const router = Router();

router.get("/getAll", todoController.getAll);
router.post("/createTodo", todoController.createTodo);
router.put("/updateTodo/:id", todoController.updateTodo);
router.delete("/deleteTodo/:id", todoController.deleteTodo);
router.get("/getTodoById/:id", todoController.getTodoById);

export default router;
