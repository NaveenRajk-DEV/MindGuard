import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Book, Explore, Logout, Chat, Settings, Brightness4, Brightness7, Group, HelpOutline, BarChart } from "@mui/icons-material";
import { toast } from "react-hot-toast";
import { Box, Typography, Button, Paper, IconButton, CircularProgress, Switch } from "@mui/material";
import axios from "axios";
import HomeContent from "../components/HomeContent";
import ExploreContent from "../components/ExploreContent";
import JournalContent from "../components/JournalContent";
import SettingsContent from "../components/SettingsContent";
import MeditationContent from "../components/MeditationContent";
import VisualizationContent from "../components/DataVisualizationContent";
import CommunityContent from "../components/CommunityContent";
import ProfessionalHelpContent from "../components/ProfessionalHelpContent";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("Home");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    axios
      .get("http://localhost:4000/api/auth/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        bgcolor: darkMode ? "#121212" : "#f4f4f4",
        color: darkMode ? "white" : "black",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Sidebar */}
      <Paper
        elevation={5}
        sx={{
          width: 280,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: darkMode ? "#1e1e1e" : "rgba(255, 255, 255, 0.9)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          gutterBottom
          sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold" }}
        >
          {loading ? "Loading..." : `Welcome, ${user?.name || "User"}`}
        </Typography>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          icon={<Brightness7 />}
          checkedIcon={<Brightness4 />}
        />

        {/* Navigation Buttons */}
        {[
          { name: "Home", icon: <Home sx={{ color: "#2196F3" }} /> },
          { name: "Explore", icon: <Explore sx={{ color: "#9C27B0" }} /> },
          { name: "Journal", icon: <Book sx={{ color: "#4CAF50" }} /> },
          { name: "Meditation", icon: <HelpOutline sx={{ color: "#FF5722" }} /> },
          { name: "Visualization", icon: <BarChart sx={{ color: "#03A9F4" }} /> },
          { name: "Community", icon: <Group sx={{ color: "#E91E63" }} /> },
          { name: "Professional Help", icon: <HelpOutline sx={{ color: "#673AB7" }} /> },
          { name: "Settings", icon: <Settings sx={{ color: "#FF9800" }} /> },
        ].map((tab) => (
          <Button
            key={tab.name}
            fullWidth
            onClick={() => setActiveTab(tab.name)}
            startIcon={tab.icon}
            sx={{
              mb: 2,
              fontFamily: "Source Sans Pro, sans-serif",
              color: activeTab === tab.name ? "white" : "black",
              bgcolor: activeTab === tab.name ? tab.icon.props.sx.color : "transparent",
              transition: "0.3s",
              borderRadius: "15px",
              textTransform: "capitalize",
              fontSize: "1rem",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: tab.icon.props.sx.color,
                color: "white",
              },
            }}
          >
            {tab.name}
          </Button>
        ))}

        {/* Logout Button */}
        <Button
          startIcon={<Logout />}
          fullWidth
          color="error"
          variant="contained"
          onClick={handleLogout}
          sx={{ mt: "auto", borderRadius: "20px", fontFamily: "Source Sans Pro, sans-serif" }}
        >
          Logout
        </Button>
      </Paper>

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 4, overflowY: "auto" }}>
        {loading ? (
          <CircularProgress color="primary" />
        ) : (
          <>
            {activeTab === "Home" && <HomeContent />}
            {activeTab === "Journal" && <JournalContent />}
            {activeTab === "Explore" && <ExploreContent />}
            {activeTab === "Settings" && <SettingsContent />}
            {activeTab === "Meditation" && <MeditationContent />}
            {activeTab === "Visualization" && <VisualizationContent />}
            {activeTab === "Community" && <CommunityContent />}
            {activeTab === "Professional Help" && <ProfessionalHelpContent />}
          </>
        )}
      </Box>

      {/* Chatbot Floating Button */}
      <IconButton
        onClick={() => navigate("/chat")}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          bgcolor: "#00bcd4",
          color: "white",
          borderRadius: "50%",
          p: 2,
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          transition: "0.3s",
          '&:hover': { bgcolor: "#008c9e" },
        }}
      >
        <Chat />
      </IconButton>
    </Box>
  );
}
