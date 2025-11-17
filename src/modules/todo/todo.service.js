import prisma from "../../config/db.js";

export const getAll = async () => {
  return await prisma.todo.findMany();
};

export const createTodo = async (data) => {
  return await prisma.todo.create({
    data,
  });
};

export const updateTodo = async ({ id, title, status, description }) => {
  return await prisma.todo.update({
    where: { id },
    data: { title, status, description },
  });
};

export const deleteTodo = async (id) => {
  return await prisma.todo.delete({
    where: { id },
  });
};

export const getTodoById = async (id) => {
  return await prisma.todo.findUnique({
    where: { id },
  });
};
