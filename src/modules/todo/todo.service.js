import prisma from "../../config/db.js";

export const getAll = async () => {
  return await prisma.todo.findMany();
};

export const create = async (data) => {
  return await prisma.todo.create({ data });
};
