import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardContent, Button, Grid, Avatar } from "@mui/material";
import { Book, AutoAwesome, Chat, Edit, AccessTime, Mic, Favorite, Spa, Mail } from "@mui/icons-material";
import { motion } from "framer-motion";

// Motivational quotes (auto-updating)
const quotes = [
  "The best way out is always through. – Robert Frost",
  "You are stronger than you think. – Unknown",
  "Every moment is a fresh beginning. – T.S. Eliot",
  "Your story is still being written. Keep going. – Unknown",
  "Happiness is not something ready-made. It comes from your actions. – Dalai Lama"
];

const journalFeatures = [
  { title: "AI-Generated Reflections", description: "Get insights based on your journal entries.", icon: <AutoAwesome color="primary" />, path: "/ai-reflections" },
  { title: "Sentiment & Emotion Analysis", description: "Track your emotions with AI-powered analysis.", icon: <Favorite color="error" />, path: "/emotion-analysis" },
  { title: "AI-Generated Letters to Self", description: "Receive supportive letters based on journal insights.", icon: <Mail color="success" />, path: "/letters-to-self" },
  { title: "Interactive Storytelling Mode", description: "Turn your journal into an inspiring personal story.", icon: <Book color="secondary" />, path: "/story-mode" },
  { title: "Guided Journal Prompts", description: "Answer personalized prompts for self-reflection.", icon: <Edit color="warning" />, path: "/journal-prompts" },
  { title: "Journal Streak & Milestones", description: "Track your journaling habits and unlock rewards.", icon: <AccessTime color="info" />, path: "/journal-streaks" },
  { title: "Voice-to-Text Journaling", description: "Speak and let AI convert your words into journal entries.", icon: <Mic color="primary" />, path: "/voice-journal" },
  { title: "Time Capsule Mode", description: "Write a message for your future self to unlock later.", icon: <Spa color="success" />, path: "/time-capsule" },
];

const JournalDashboard = () => {
  const navigate = useNavigate();
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Auto-update quote every 10 seconds
    const updateQuote = () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    };
    
    updateQuote();
    const interval = setInterval(updateQuote, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Box p={4} sx={{ backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
      {/* Motivational Quote */}
      <Typography variant="h6" textAlign="center" color="text.secondary" mb={2}>
        "{quote}"
      </Typography>

      <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center" sx={{ fontFamily: "Poppins, sans-serif" }}>
        Your Mental Wellness Journal ✨
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {journalFeatures.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card
                sx={{
                  borderRadius: "20px",
                  boxShadow: 3,
                  background: "linear-gradient(135deg, #ffffff, #e0f7fa)",
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
                onClick={() => navigate(feature.path)}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Avatar sx={{ bgcolor: "#f5f5f5", mx: "auto", mb: 2 }}>{feature.icon}</Avatar>
                  <Typography variant="h6" fontWeight="bold">{feature.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{feature.description}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default JournalDashboard;
