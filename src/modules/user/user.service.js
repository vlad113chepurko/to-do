import prisma from "../../config/db.js";

export const getUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

export const createUser = async (userData) => {
  return await prisma.user.create({
    data: userData,
  });
};
