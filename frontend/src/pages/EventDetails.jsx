import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Typography, Card, CardContent, Button, Grid, Chip, TextField } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

export default function EventDetails() {
  const { eventTitle } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [attendeeData, setAttendeeData] = useState([]);
  const [userName, setUserName] = useState(""); // Input field for user name

  // Fetch event details from backend
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/events/${encodeURIComponent(eventTitle)}`)
      .then((res) => {
        setEvent(res.data);
        setAttendeeData([
          { name: "RSVPs", count: res.data.attendees.length },
          { name: "Capacity", count: 100 },
        ]);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [eventTitle]);

  // Handle RSVP
  const handleRSVP = () => {
    if (!userName.trim()) return alert("Please enter your name to RSVP.");
    
    axios
      .post(`http://localhost:5000/api/events/${encodeURIComponent(eventTitle)}/rsvp`, { userName })
      .then((res) => {
        setAttendeeData([
          { name: "RSVPs", count: res.data.event.attendees.length },
          { name: "Capacity", count: 100 },
        ]);
        alert("RSVP successful!");
      })
      .catch((err) => console.error(err));
  };

  if (loading) return <Typography variant="h6">Loading event details...</Typography>;
  if (!event) return <Typography variant="h6" color="error">Event not found!</Typography>;

  return (
    <Box p={3}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ borderRadius: "15px", boxShadow: 3, p: 2 }}>
          <CardContent>
            <Typography variant="h4" fontWeight="bold">{event.title}</Typography>
            <motion.img
              src={event.image}
              alt="Event Banner"
              width="100%"
              style={{ borderRadius: "10px", marginTop: "10px" }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <Typography variant="body1" mt={2}>{event.description}</Typography>

            <Grid container spacing={2} mt={2}>
              <Grid item xs={6}>
                <Typography variant="h6">📅 Date: {event.date}</Typography>
                <Typography variant="h6">⏰ Time: {event.time}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">📍 Location: {event.location}</Typography>
                <Typography variant="h6">🎤 Speaker: {event.speaker}</Typography>
              </Grid>
            </Grid>

            {/* Tags */}
            <Box mt={2}>
              <Chip label="Mental Health" variant="outlined" sx={{ marginRight: 1 }} />
              <Chip label="Wellness" variant="outlined" sx={{ marginRight: 1 }} />
            </Box>

            {/* Attendee Stats */}
            <Box mt={3} height={200}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attendeeData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Box>

            {/* RSVP Input & Button */}
            <Box mt={3} display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Enter Your Name"
                variant="outlined"
                fullWidth
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={handleRSVP}>
                RSVP
              </Button>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}
