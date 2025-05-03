import React from "react";
import { Box, Typography } from "@mui/material";

export default function Meditation() {
  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold">🧘 Guided Meditation</Typography>
      <Typography variant="body1" mt={2}>
        Explore meditation techniques and guided sessions to help you relax and focus.
      </Typography>
    </Box>
  );
}
