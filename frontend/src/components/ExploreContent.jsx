import React from "react";
import { Box, Typography, Card, CardContent, Button, Grid, Divider } from "@mui/material";
import { MusicNote, Pets, Psychology, Visibility, VolumeUp, Healing, Timer, BarChart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const features = [
  { title: "🎵 AI-Powered Music Therapy", description: "Mood-based playlists and binaural beats for relaxation.", icon: <MusicNote color="secondary" />, path: "/music-therapy" },
  { title: "🐾 Virtual Mood Companion", description: "Adopt a digital pet that interacts with you based on your mood.", icon: <Pets color="success" />, path: "/mood-companion" },
  { title: "🧠 AI Emotion Analysis", description: "Express your emotions and get personalized feedback.", icon: <Psychology color="primary" />, path: "/emotion-analysis" },
  { title: "🌀 AR/VR Relaxation Room", description: "Enter a virtual calming environment for deep relaxation.", icon: <Visibility color="error" />, path: "/vr-room" },
  { title: "🔊 Voice Note Venting", description: "Record your thoughts and get AI-driven insights.", icon: <VolumeUp color="primary" />, path: "/voice-venting" },
  { title: "🧩 Therapy Escape Room", description: "Solve interactive puzzles that teach emotional regulation skills.", icon: <Healing color="success" />, path: "/therapy-games" },
  { title: "⏳ Digital Detox Advisor", description: "Get AI suggestions for screen time management and social detox.", icon: <Timer color="secondary" />, path: "/digital-detox" },
];

export default function MentalHealthFeatures() {
  const navigate = useNavigate();

  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ fontFamily: "Poppins, sans-serif" }}>
        Explore Mental Health Features 🌿
      </Typography>

      {/* Unique Features */}
      <Grid container spacing={2}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ borderRadius: "15px", boxShadow: 3, p: 2 }}>
              <Typography variant="h6" fontWeight="bold">{feature.title}</Typography>
              <Typography variant="body2" color="text.secondary">{feature.description}</Typography>
              <Button variant="contained" sx={{ mt: 1 }} onClick={() => navigate(feature.path)}>Explore</Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* Mood Tracker & AI Insights */}
      <Typography variant="h6" fontWeight="bold">📊 Mood Tracker & AI Insights</Typography>
      <Card sx={{ borderRadius: "15px", boxShadow: 3, p: 2, mt: 2 }}>
        <Typography variant="body1">Monitor mood trends and emotional patterns over time.</Typography>
        <Button variant="outlined" color="success" sx={{ mt: 2 }} onClick={() => navigate("/insights")}>View Insights</Button>
      </Card>
    </Box>
  );
}
