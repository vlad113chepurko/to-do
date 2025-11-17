import * as userService from "./user.service.js";

export const loginUser = async (req, res, next) => {
  try {
    const user = await userService.getUserByEmail(req.body.email);
    if (!user || user.password !== req.body.password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.json({ message: "Login successful", user });
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
    const newUser = await userService.createUser(req.body);
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (e) {
    next(e);
  }
};
