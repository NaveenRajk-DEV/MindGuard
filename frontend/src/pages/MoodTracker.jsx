import React, { useState } from "react";
import { Box, Typography, Button, List, ListItem, ListItemText } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const moodOptions = ["Happy 😊", "Neutral 😐", "Sad 😢", "Stressed 😩"];
const moodData = [];

export default function MoodTracker() {
  const [moods, setMoods] = useState([]);

  const logMood = (mood) => {
    const newEntry = { date: new Date().toLocaleDateString(), mood };
    setMoods([...moods, newEntry]);
    moodData.push({ name: newEntry.date, value: moodOptions.indexOf(mood) + 1 });
  };

  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold">📊 Mood Tracker</Typography>
      <Typography variant="body1" mt={1}>Log your mood to track your emotional well-being over time.</Typography>

      {moodOptions.map((mood, index) => (
        <Button key={index} variant="contained" sx={{ m: 1 }} onClick={() => logMood(mood)}>{mood}</Button>
      ))}

      <List sx={{ mt: 3 }}>
        {moods.map((entry, index) => (
          <ListItem key={index} sx={{ borderBottom: "1px solid #ccc" }}>
            <ListItemText primary={entry.date} secondary={entry.mood} />
          </ListItem>
        ))}
      </List>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={moodData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[1, moodOptions.length]} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
