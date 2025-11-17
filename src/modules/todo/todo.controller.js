import * as todoService from "./todo.service.js";

export const getAll = async (req, res, next) => {
  try {
    const todos = await todoService.getAll();
    res.status(200).json(todos);
  } catch (e) {
    next(e);
  }
};
