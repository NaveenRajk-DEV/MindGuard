import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import AirIcon from "@mui/icons-material/Air";
import TimerIcon from "@mui/icons-material/Timer";
import ReplayIcon from "@mui/icons-material/Replay";

const exercises = [
  { name: "4-7-8 Breathing", duration: "4-7-8", color: "#D1E8E4", img: "/4-7-8-illustration.png" }, // Soft Mint
  { name: "Diaphragmatic Breathing", duration: "5-5", color: "#FFEBE7", img: "/diaphragmatic-breathing-illustration.png" }, // Soft Peach
  { name: "Alternate Nostril Breathing", duration: "4-4-4-4", color: "#E0D7F5", img: "/alternate-nostril-breathing-illustration.png" }, // Soft Lavender
  { name: "Pursed-Lip Breathing", duration: "2-4", color: "#F7E6C4", img: "/pursed-lip-breathing-illustration.png" }, // Warm Sand
  { name: "Lion’s Breath", duration: "3-3", color: "#F8F4E1", img: "/lions-breath-illustration.png" }, // Soft Cream
  { name: "Humming Bee Breath", duration: "4-4", color: "#E4C1F9", img: "/humming-bee-breath-illustration.png" } // Gentle Orchid
];

export default function BreathingExercise() {
  return (
    <Box sx={{ p: 4, textAlign: "center", maxWidth: 1200, margin: "auto" }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, color: "#37474F" }}>
          <AirIcon sx={{ fontSize: 40, verticalAlign: "middle", mr: 1 }} />
          Breathing Exercises
        </Typography>
      </motion.div>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 4 }}>
        {exercises.map((exercise, index) => (
          <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 * index }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                bgcolor: exercise.color,
                borderRadius: "25px",
                p: 4,
                height: 300,
                overflow: "hidden",
                boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": { transform: "scale(1.02)" }
              }}
            >
              <CardContent sx={{ flex: 1, textAlign: "left" }}>
                <Typography variant="h6" fontWeight="bold" sx={{ color: "#37474F", mb: 1 }}>
                  {exercise.name}
                </Typography>
                <Typography variant="body1" sx={{ color: "#455A64" }}>
                  Breathing Pattern: {exercise.duration} seconds
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    bgcolor: "#37474F",
                    borderRadius: "20px",
                    "&:hover": { bgcolor: "#263238" },
                    transition: "background 0.3s ease"
                  }}
                  startIcon={<TimerIcon />}
                >
                  Start
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    mt: 3,
                    ml: 1,
                    borderColor: "#37474F",
                    color: "#37474F",
                    borderRadius: "20px",
                    "&:hover": { bgcolor: "#37474F", color: "#fff" },
                    transition: "background 0.3s ease"
                  }}
                  startIcon={<ReplayIcon />}
                >
                  Reset
                </Button>
              </CardContent>
              <Box
                sx={{
                  width: "55%",
                  height: "100%",
                  backgroundImage: `url(${exercise.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "0 25px 25px 0"
                }}
              />
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
