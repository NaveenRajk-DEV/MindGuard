import React, { useState } from "react";
import ParticleBackground from "./ParticleBackground"; // Ensure this file exists
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Box, Typography, Paper, Tabs, Tab } from "@mui/material";
import { motion } from "framer-motion";
import { FaChartLine, FaBrain, FaBed, FaTachometerAlt } from "react-icons/fa";

// Sample Data
const moodData = [
  { date: "2024-02-01", Mood: 7, Stress: 5, Anxiety: 4 },
  { date: "2024-02-02", Mood: 6, Stress: 6, Anxiety: 5 },
  { date: "2024-02-03", Mood: 8, Stress: 4, Anxiety: 3 },
];

const comparisonData = [
  { category: "Mood", You: 7, Average: 6 },
  { category: "Stress", You: 5, Average: 6 },
  { category: "Anxiety", You: 4, Average: 5 },
];

const sleepProductivityData = [
  { category: "Sleep", Value: 7 },
  { category: "Productivity", Value: 8 },
];

const wellnessScore = [{ name: "Your Score", value: 75 }, { name: "Max Score", value: 100 }];

const COLORS = ["#4CAF50", "#E0E0E0"];

export default function DataVisualizationContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Particle Background */}
      <Box sx={{ position: "absolute", width: "100%", height: "100%", zIndex: 0 }}>
        <ParticleBackground />
      </Box>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ p: 3, width: "90%", maxWidth: 900 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}
          >
            Mental Health Dashboard
          </Typography>

          {/* Tabs for navigation */}
          <Tabs
            value={activeTab}
            onChange={(e, newVal) => setActiveTab(newVal)}
            centered
            sx={{ backgroundColor: "#333", borderRadius: "8px", color: "white" }}
          >
            <Tab icon={<FaChartLine />} label="Mood Trends" sx={{ color: "white" }} />
            <Tab icon={<FaBrain />} label="Comparisons" sx={{ color: "white" }} />
            <Tab icon={<FaBed />} label="Sleep & Productivity" sx={{ color: "white" }} />
            <Tab icon={<FaTachometerAlt />} label="Wellness Score" sx={{ color: "white" }} />
          </Tabs>

          {/* Content Sections */}
          {activeTab === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Paper sx={{ p: 3, my: 4, borderRadius: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Mood & Stress Trends
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={moodData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Mood" stroke="#4CAF50" strokeWidth={2} />
                    <Line type="monotone" dataKey="Stress" stroke="#FF9800" strokeWidth={2} />
                    <Line type="monotone" dataKey="Anxiety" stroke="#E91E63" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Paper sx={{ p: 3, my: 4, borderRadius: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Mood Comparisons
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="You" fill="#4CAF50" />
                    <Bar dataKey="Average" fill="#E91E63" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Paper sx={{ p: 3, my: 4, borderRadius: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Sleep & Productivity
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sleepProductivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Value" fill="#03A9F4" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </motion.div>
          )}

          {activeTab === 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Paper sx={{ p: 3, my: 4, borderRadius: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Wellness Score
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={wellnessScore}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label
                    >
                      {wellnessScore.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </motion.div>
          )}
        </Box>
      </motion.div>
    </Box>
  );
}
