import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  try {
    const existingUser = await User.findOne({ email,username });
    if (existingUser) {
      return next(errorHandler(400, "Already exists"));
    }
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save(); //save into the model
    res.status(201).json("User created successfully");
  } catch (error) {
    next(errorHandler(500,"Something wrong"));
    // next(errorHandler(550,'error from functiom')) //created err
    // res.status(500).json(error.message)//sending duplicate error or errors to user
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "user not found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    //pass is used because above password called in const
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest); //created cookie protected (httpOnly) and sending without password(rest)
  } catch (error) {
    next(error);
  }
};
