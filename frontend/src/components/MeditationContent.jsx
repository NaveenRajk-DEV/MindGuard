import React from "react";
import { Box, Typography, Button, Card, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaLungs, FaBrain, FaHeart } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function MeditationContent() {
  const navigate = useNavigate();

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #a1c4fd, #c2e9fb)",
        overflow: "hidden",
        px: 3,
        py: 5,
      }}
    >
      {/* Animated Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 80, density: { enable: true, area: 900 } },
            color: { value: ["#ffffff"] },
            shape: { type: ["circle", "star"] },
            opacity: { value: 0.5, random: true },
            size: { value: 6, random: true },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          },
        }}
      />

      {/* Main Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          textAlign: "center",
          p: 4,
          bgcolor: "rgba(255, 255, 255, 0.3)",
          borderRadius: "20px",
          backdropFilter: "blur(12px)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontFamily: "Poppins, sans-serif", mb: 4, color: "#fff" }}
        >
          Meditation & Coping Mechanisms
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {/* Breathing Exercises */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                p: 2,
                bgcolor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "20px",
                transition: "transform 0.4s ease-in-out",
                boxShadow: "0 5px 20px rgba(0, 0, 0, 0.15)",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.05)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FaLungs size={50} color="#1565C0" style={{ marginBottom: "12px" }} />
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: "#1565C0" }}>
                  Breathing Exercises
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: "#333" }}>
                  Try the 4-7-8 breathing technique: Inhale for 4 seconds, hold for 7 seconds, and exhale for 8 seconds.
                </Typography>
                <Button variant="contained" color="primary" onClick={() => navigate("/breathing-exercise")}>
                  Start Exercise
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Guided Meditation (Increased Size) */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                p: 3,
                bgcolor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "20px",
                transition: "transform 0.4s ease-in-out",
                boxShadow: "0 5px 20px rgba(0, 0, 0, 0.15)",
                "&:hover": {
                  transform: "translateY(-10px) scale(1.1)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FaBrain size={60} color="#8E24AA" style={{ marginBottom: "15px" }} />
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: "#8E24AA" }}>
                  Guided Meditation
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: "#333" }}>
                  Listen to a short guided meditation session to calm your mind.
                </Typography>
                <Button variant="contained" color="secondary" onClick={() => navigate("/guided-meditation")}>
                  Start Meditation
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Coping Strategies */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                p: 2,
                bgcolor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "20px",
                transition: "transform 0.4s ease-in-out",
                boxShadow: "0 5px 20px rgba(0, 0, 0, 0.15)",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.05)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FaHeart size={50} color="#2E7D32" style={{ marginBottom: "12px" }} />
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: "#2E7D32" }}>
                  Coping Strategies
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: "#333" }}>
                  Personalized mental health tips to improve emotional well-being.
                </Typography>
                <Button variant="contained" color="success" onClick={() => navigate("/coping-strategies")}>
                  Explore Strategies
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

