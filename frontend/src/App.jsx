<<<<<<< HEAD
// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./AppContent";
import { AuthProvider } from "./AuthContext"; 

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
=======
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./AppContent";

const App = () => {
  // Initialize token from localStorage for persistent login state
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Helper to update token both in state and localStorage
  const setTokenAndStore = (token) => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    setToken(token);
  };

  return (
    <Router>
      <AppContent token={token} setTokenAndStore={setTokenAndStore} />
>>>>>>> 233874662a4fd5fdf88e451938f8647a5dacdfd0
    </Router>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 233874662a4fd5fdf88e451938f8647a5dacdfd0
