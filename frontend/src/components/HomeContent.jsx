import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Button, Grid, Avatar, Divider, CircularProgress } from "@mui/material";
import { Mood, BarChart, Support, Help, Warning } from "@mui/icons-material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

// Sample Mood Data for Chart
const moodData = [
  { day: "Mon", mood: 60 },
  { day: "Tue", mood: 70 },
  { day: "Wed", mood: 50 },
  { day: "Thu", mood: 80 },
  { day: "Fri", mood: 75 },
  { day: "Sat", mood: 90 },
  { day: "Sun", mood: 85 },
];

const DashboardHome = () => {
  const [username, setUsername] = useState("User");
  const [sentiment, setSentiment] = useState("Analyzing...");
  const [riskLevel, setRiskLevel] = useState("Loading...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get username from local storage or API
    const storedUser = localStorage.getItem("username") || "Guest";
    setUsername(storedUser);

    // Simulating API calls for sentiment and risk prediction
    setTimeout(() => {
      setSentiment("Positive 😊");
      setRiskLevel("Low Risk ✅");
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box p={3}>
      {/* Header with Logged-in Username */}
      <Typography variant="h4" fontWeight="bold">
        Good Morning, {username}! 🌿
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Your well-being journey starts today!
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Real-Time Sentiment Analysis */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: "15px", boxShadow: 3, textAlign: "center" }}>
            <CardContent>
              <Avatar sx={{ bgcolor: "#f5f5f5", mx: "auto", mb: 1 }}>
                <Mood color="primary" />
              </Avatar>
              <Typography variant="h6" fontWeight="bold">
                Real-Time Sentiment
              </Typography>
              {loading ? <CircularProgress size={24} /> : <Typography variant="body1">{sentiment}</Typography>}
            </CardContent>
          </Card>
        </Grid>

        {/* Predictive Risk Analysis */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: "15px", boxShadow: 3, textAlign: "center" }}>
            <CardContent>
              <Avatar sx={{ bgcolor: "#f5f5f5", mx: "auto", mb: 1 }}>
                <Warning color="error" />
              </Avatar>
              <Typography variant="h6" fontWeight="bold">
                Predictive Risk Analysis
              </Typography>
              {loading ? <CircularProgress size={24} /> : <Typography variant="body1">{riskLevel}</Typography>}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* Mood Analysis Graph */}
      <Typography variant="h6" fontWeight="bold">
        📊 Mood Analysis Over Time
      </Typography>
      <Card sx={{ borderRadius: "15px", boxShadow: 3, p: 2, mt: 2 }}>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={moodData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="mood" stroke="#3f51b5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Divider sx={{ my: 3 }} />

      {/* Mental Health Insights Panel */}
      <Typography variant="h6" fontWeight="bold">
        🧠 Mental Health Insights Panel
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: "15px", boxShadow: 3, p: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              AI-Powered Suggestions
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Based on your mood trends, we suggest a **15-minute meditation** to boost your well-being.
            </Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 1 }}>
              Start Now
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: "15px", boxShadow: 3, p: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Self-Care Resources
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Explore guided journaling, sleep improvement, and relaxation techniques.
            </Typography>
            <Button variant="outlined" color="secondary" sx={{ mt: 1 }}>
              Explore Resources
            </Button>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* Community & Support */}
      <Typography variant="h6" fontWeight="bold">
        🤝 Connect with the Community
      </Typography>
      <Card sx={{ borderRadius: "15px", boxShadow: 3, p: 2, mt: 2 }}>
        <Typography variant="body1">
          Join anonymous forums & share experiences with others.
        </Typography>
        <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
          Join Now
        </Button>
      </Card>

      <Divider sx={{ my: 3 }} />

      {/* Search & Help Buttons */}
      <Box mt={3} display="flex" justifyContent="space-between">
        <Button variant="contained" startIcon={<Support />} color="primary">
          Search Resources
        </Button>
        <Button variant="contained" startIcon={<Help />} color="secondary">
          Need Help?
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardHome;
