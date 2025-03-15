import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Switch,
  Button,
  Divider,
  Avatar,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import {
  AccountCircle,
  Lock,
  Notifications,
  Payment,
  Help,
  ExitToApp,
  ExpandMore,
} from "@mui/icons-material";

export default function SettingsPage() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [notifications, setNotifications] = useState(true);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get("/api/user/settings");
        setUser(response.data);
        setNotifications(response.data.notifications);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data", error);
        setLoading(false);
      }
    }
    fetchUserData();
  }, []);

  const handleSave = async () => {
    try {
      await axios.patch("/api/user/settings", {
        name: user.name,
        email: user.email,
        notifications,
      });
      alert("Settings updated successfully!");
    } catch (error) {
      console.error("Error updating settings", error);
    }
  };

  const handleActionConfirm = async () => {
    if (dialogType === "delete") {
      try {
        await axios.delete("/api/user/delete");
        alert("Account deleted!");
      } catch (error) {
        console.error("Error deleting account", error);
      }
    } else if (dialogType === "logout") {
      try {
        await axios.post("/api/auth/logout");
        alert("Logged out successfully!");
      } catch (error) {
        console.error("Error logging out", error);
      }
    }
    setDialogOpen(false);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box p={3} sx={{ maxWidth: 600, mx: "auto" }}>
        <Typography variant="h4" fontWeight="bold" mb={2} align="center">
          ⚙️ Settings
        </Typography>

        {/* Account Settings */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">
              <AccountCircle /> Account Settings
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
              <CardContent>
                <Avatar sx={{ width: 70, height: 70, mb: 2, mx: "auto" }}>U</Avatar>
                <TextField fullWidth label="Full Name" sx={{ mb: 2 }} value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                <TextField fullWidth label="Email" sx={{ mb: 2 }} value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </AccordionDetails>
        </Accordion>

        {/* Notifications */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">
              <Notifications /> Notifications
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary="Email Notifications" />
                <Switch checked={notifications} onChange={() => setNotifications(!notifications)} />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Subscription & Billing */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">
              <Payment /> Subscription & Billing
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Your current plan: <strong>Free</strong></Typography>
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
              Upgrade to Premium
            </Button>
          </AccordionDetails>
        </Accordion>

        {/* Support & Help */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">
              <Help /> Support & Help Center
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button variant="outlined" fullWidth>Contact Support</Button>
          </AccordionDetails>
        </Accordion>

        <Divider sx={{ my: 3 }} />

        {/* Logout */}
        <Button variant="contained" color="error" fullWidth startIcon={<ExitToApp />} onClick={() => { setDialogOpen(true); setDialogType("logout"); }}>
          Logout
        </Button>

        {/* Confirmation Dialog */}
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Are you sure you want to {dialogType === "delete" ? "delete your account" : "log out"}?</DialogTitle>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleActionConfirm} color="error">{dialogType === "delete" ? "Delete" : "Logout"}</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </motion.div>
  );
}
