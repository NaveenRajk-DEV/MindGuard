import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { Event } from "@mui/icons-material";

const events = [
  { title: "Mental Health Webinar", date: "March 5, 2025" },
  { title: "Live Meditation Session", date: "March 10, 2025" },
];

export default function Events() {
  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold">🎤 Upcoming Events</Typography>
      <Grid container spacing={2} mt={1}>
        {events.map((event, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ borderRadius: "15px", boxShadow: 3, p: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{event.title}</Typography>
                <Typography variant="body2" color="text.secondary">{event.date}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
