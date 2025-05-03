import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

// Get user information (profile)
const getUserInfo = async () => {
  const token = localStorage.getItem('authToken');
  if (!token) throw new Error("No token found");

  try {
    const response = await axios.get(`${apiUrl}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Return user data
  } catch (error) {
    throw new Error("Failed to load user information.");
  }
};

// Update user information (name, email, password, bio)
const updateUser = async (updatedData) => {
  const token = localStorage.getItem('authToken');
  if (!token) throw new Error("No token found");

  try {
    const response = await axios.put(`${apiUrl}/user`, updatedData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Return success or updated data
  } catch (error) {
    throw new Error("Failed to update profile.");
  }
};

export default {
  getUserInfo,
  updateUser,
};
