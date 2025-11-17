import * as todoService from "./todo.service.js";
import { getUserById } from "../user/user.service.js";

export const getAll = async (req, res, next) => {
  try {
    const todos = await todoService.getAll();
    res.status(200).json(todos);
  } catch (e) {
    next(e);
  }
};

export const createTodo = async (req, res, next) => {
  try {
    const user = await getUserById(req.body.userId);
    if (!user) {
      return res.status(400).json({ message: "Invalid userId" });
    }
    const todo = await todoService.createTodo(req.body);
    res.status(201).json(todo);
  } catch (e) {
    next(e);
  }
};

export const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    console.log("Id: ", id);
    console.log("Title: ", title);
    console.log("Completed: ", completed);

    if (!id) {
      return res.status(400).json({ message: "Todo ID is required" });
    }

    const todo = await todoService.updateTodo({ id, title, completed });
    res.status(200).json(todo);
  } catch (e) {
    next(e);
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    await todoService.deleteTodo(id);
    res.status(204).end();
  } catch (e) {
    next(e);
  }
};

export const getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await todoService.getTodoById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (e) {
    next(e);
  }
};
