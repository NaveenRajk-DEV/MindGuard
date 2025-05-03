import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";  // Adjusted for ES module import
import userAuth from "../middlewares/auth.js";  // Import your userAuth middleware

const router = express.Router();

// GET /api/user - Get current user info
router.get("/", userAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Use req.user.id from token
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to get user info" });
  }
});

// PUT /api/user - Update user info
router.put("/", userAuth, async (req, res) => {
  const { name, email, password, bio } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    // Check if email already exists for another user
    if (email && email !== user.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) return res.status(400).json({ success: false, message: "Email already in use" });
    }

    // Update fields only if provided
    if (name) user.name = name;
    if (email) user.email = email;
    if (bio) user.bio = bio;

    // If password is provided, hash it
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();

    // Return updated user (without password)
    const updatedUser = { name: user.name, email: user.email, bio: user.bio };
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update user info" });
  }
});

export default router;
