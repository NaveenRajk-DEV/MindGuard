import React from "react";
import { Box, Typography, Card, CardContent, Grid, Avatar } from "@mui/material";
import { Book, SelfImprovement, Favorite } from "@mui/icons-material";

const articles = [
  { title: "The Power of Mindfulness", description: "Learn how mindfulness can reduce stress and improve focus.", icon: <Book color="primary" /> },
  { title: "5-Minute Breathing Exercises", description: "Quick breathing techniques for relaxation.", icon: <SelfImprovement color="success" /> },
  { title: "Building Emotional Resilience", description: "Tips to handle stress and anxiety better.", icon: <Favorite color="error" /> },
];

export default function Articles() {
  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold">📖 Articles & Blogs</Typography>
      <Grid container spacing={2} mt={2}>
        {articles.map((article, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ borderRadius: "15px", boxShadow: 3 }}>
              <CardContent>
                <Avatar sx={{ bgcolor: "#f5f5f5", mb: 1 }}>{article.icon}</Avatar>
                <Typography variant="h6" fontWeight="bold">{article.title}</Typography>
                <Typography variant="body2" color="text.secondary">{article.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
