import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Button, List, ListItem, ListItemText } from "@mui/material";

const challenges = [
  { title: "30-Day Gratitude Challenge", description: "Write one thing you're grateful for daily.", joined: false },
  { title: "Journaling for Self-Discovery", description: "Reflect on your thoughts through journaling.", joined: false },
  { title: "Daily Positive Affirmations", description: "Speak positivity into your life every morning.", joined: false },
];

export default function ChallengesDetail() {
  const [joinedChallenges, setJoinedChallenges] = useState([]);

  const handleJoin = (challenge) => {
    setJoinedChallenges([...joinedChallenges, challenge]);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold">🎯 Self-Improvement Challenges</Typography>
      <Typography variant="body1" mt={1}>Join challenges to improve your mental well-being.</Typography>

      <List>
        {challenges.map((challenge, index) => (
          <ListItem key={index} sx={{ borderBottom: "1px solid #ccc" }}>
            <ListItemText primary={challenge.title} secondary={challenge.description} />
            <Button
              variant="contained"
              disabled={joinedChallenges.includes(challenge.title)}
              onClick={() => handleJoin(challenge.title)}
            >
              {joinedChallenges.includes(challenge.title) ? "Joined" : "Join"}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
