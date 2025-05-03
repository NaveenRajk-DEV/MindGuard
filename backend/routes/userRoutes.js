<<<<<<< HEAD
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
=======
import express from 'express';
import { registerUser, loginUser, getDashboard } from '../controllers/usercontroller.js';
import userAuth from '../middlewares/auth.js'; // Ensure your middleware correctly verifies the JWT

const userRouter = express.Router();

// Endpoints to match your front-end routes:
// Signup: /api/auth/signup
userRouter.post('/signup', registerUser);

// Login: /api/auth/login
userRouter.post('/login', loginUser);

// Dashboard: /api/auth/dashboard
userRouter.get('/dashboard', userAuth, getDashboard);
>>>>>>> 233874662a4fd5fdf88e451938f8647a5dacdfd0

export default userRouter;
