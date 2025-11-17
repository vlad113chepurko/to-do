import * as todoService from "./todo.service.js";

export const getAll = async (req, res, next) => {
  try {
    const todos = await todoService.getAll();
    res.json(todos);
  } catch (e) {
    next(e);
  }
};

export const create = async (req, res, next) => {
  try {
    const todo = await todoService.create(req.body);
    res.json(todo);
  } catch (e) {
    next(e);
  }
};
