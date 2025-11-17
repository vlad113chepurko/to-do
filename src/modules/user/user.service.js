import prisma from "../../config/db.js";
import jwt from "jsonwebtoken";

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

export const generateToken = (user) => {
  const payload = { id: user.id, email: user.email };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};
