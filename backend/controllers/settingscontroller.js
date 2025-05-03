import User from '../models/User.js';
import bcrypt from 'bcryptjs';

// Controller to fetch user info from token
export const getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user); // Return user data (name, email, bio)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to update user profile
export const updateUserProfile = async (req, res) => {
  const { name, email, bio } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check if new email is taken by someone else
    if (email && email !== user.email) {
      const emailTaken = await User.findOne({ email });
      if (emailTaken) {
        return res.status(400).json({ message: 'Email is already taken' });
      }
    }

    // Update the user's information with the provided fields
    if (name) user.name = name;
    if (email) user.email = email;
    if (bio !== undefined) user.bio = bio;

    // Save updated user
    await user.save();
    res.json({ message: 'Profile updated successfully', user }); // Return the updated user
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
