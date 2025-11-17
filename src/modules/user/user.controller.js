import * as userService from "./user.service.js";
import bcrypt from "bcrypt";

export const loginUser = async (req, res, next) => {
  try {
    const user = await userService.getUserByEmail(req.body.email);
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = userService.generateToken(user);
    res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};

export const registerUser = async (req, res, next) => {
  try {
    const existingUser = await userService.getUserByEmail(req.body.email);
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await userService.createUser({
      ...req.body,
      password: hashedPassword,
    });
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (e) {
    next(e);
  }
};
