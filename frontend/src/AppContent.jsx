// src/AppContent.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import { useAuth } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";

// 🛠 Correct imports based on your folder
import BreathingExercise from "./UserDashboardPages/BreathingExercise";
import GuidedMeditation from "./UserDashboardPages/GuidedMeditation";
import CopingStrategies from "./UserDashboardPages/CopingStrategies";

// ✅ Import the new ChatbotSuggestionsPage
import ChatbotSuggestionsPage from "./UserDashboardPages/ChatbotSuggestionsPage";

const AppContent = () => {
  const { token, setToken } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Private Dashboard */}
      <Route
        path="/dashboard/*"
        element={
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        }
      />

      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* ✅ Meditation & Mental Health routes */}
      <Route path="/breathing-exercise" element={<BreathingExercise />} />
      <Route path="/guided-meditation" element={<GuidedMeditation />} />
      <Route path="/coping-strategies" element={<CopingStrategies />} />
      <Route path="/chatbot-suggestions" element={<ChatbotSuggestionsPage />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppContent;
