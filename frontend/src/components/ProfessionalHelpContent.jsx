import React from "react";
import { Box, Typography, Card, CardContent, Button, List, ListItem, ListItemText, Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ Use navigation

const ProfessionalHelpContent = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const therapists = [
    { name: "Dr. Sarah Williams", specialty: "Anxiety & Stress Specialist" },
    { name: "Dr. John Doe", specialty: "Cognitive Behavioral Therapy" },
    { name: "Dr. Emily Brown", specialty: "Depression & Trauma Therapy" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ p: 4, display: "flex", flexDirection: "column", gap: 4 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center", mb: 2 }}>
        Professional Help & Resources
      </Typography>

      {/* Hero Section */}
      <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold">Welcome to Mental Health Support</Typography>
          <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
            Get professional help, find therapists, and access mental health resources.
          </Typography>
          <Button variant="contained" sx={{ mr: 2 }} onClick={() => handleNavigation('/get-started')}>
            Get Started
          </Button>
          <Button variant="outlined" sx={{ mr: 2 }} onClick={() => handleNavigation('/find-therapist')}>
            Find a Therapist
          </Button>
          <Button variant="outlined" onClick={() => handleNavigation('/learn-more')}>
            Learn More
          </Button>
        </CardContent>
      </Card>

      {/* Featured Professionals */}
      <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Featured Therapists
          </Typography>
          <List>
            {therapists.map((therapist, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText primary={therapist.name} secondary={therapist.specialty} />
                </ListItem>
                {index < therapists.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Therapy & Counseling Services */}
      <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Therapy & Counseling Services
          </Typography>
          <Typography variant="body1">
            Access professional counseling services for anxiety, depression, and mental health support.
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={() => handleNavigation('/services')}>
            Explore Services
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfessionalHelpContent;
