import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  try {
    await User.create({ username, email, password: hashedPassword });
    res.json({ message: "User has been added" });
  } catch (error) {
    next(error);
  }
};
