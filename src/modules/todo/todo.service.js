import prisma from "../../config/db.js";

export const getAll = async () => {
  return await prisma.todo.findMany();
};
