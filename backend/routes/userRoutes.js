import express from "express";
import {
  registerUser,
  loginUser,
  getDashboard,
  forgotPassword,
  getUserProfile,
  updateUserProfile,
} from "../controllers/usercontroller.js";
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", registerUser); // Register
userRouter.post("/login", loginUser);     // Login
userRouter.post("/forgot-password", forgotPassword);
userRouter.get("/dashboard", userAuth, getDashboard);
userRouter.get("/profile/:id", userAuth, getUserProfile);
userRouter.put("/profile/:id", userAuth, updateUserProfile);

export default userRouter;
