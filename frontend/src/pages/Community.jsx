import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

export default function Community() {
  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold">🤝 Community & Peer Support</Typography>
      <Card sx={{ borderRadius: "15px", boxShadow: 3, p: 2, mt: 2 }}>
        <Typography variant="body1">
          Join anonymous forums & connect with people facing similar challenges.
        </Typography>
        <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
          Join the Community
        </Button>
      </Card>
    </Box>
  );
}
