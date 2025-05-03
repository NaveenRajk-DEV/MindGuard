import express from 'express';
import Suggestion from '../models/Suggestion.js';
import UserRoutine from '../models/UserRoutine.js';

const router = express.Router();

// Get suggestions by category and risk level
router.get("/suggestions", async (req, res) => {
  const { category, risk_level } = req.query;
  const filter = {};

  if (category) filter.category = category;
  if (risk_level) filter.risk_level = risk_level;

  try {
    const suggestions = await Suggestion.find(filter);
    res.json(suggestions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching suggestions", error });
  }
});

// Add a suggestion to the user's routine
router.post("/routine/add", async (req, res) => {
  const { user_id, suggestion_id } = req.body;

  // Ensure no more than 5 suggestions are added
  const todayRoutineCount = await UserRoutine.countDocuments({
    user_id,
    date: new Date().toLocaleDateString(),
  });

  if (todayRoutineCount >= 5) {
    return res.status(400).json({ message: "Max 5 suggestions per day." });
  }

  // Prevent duplicates
  const existingRoutine = await UserRoutine.findOne({ user_id, suggestion_id });
  if (existingRoutine) {
    return res.status(400).json({ message: "Suggestion already added." });
  }

  const newRoutine = new UserRoutine({
    user_id,
    suggestion_id,
    status: "pending",
    added_to_routine: true,
    date: new Date(),
  });

  try {
    await newRoutine.save();
    res.json({ status: "success", message: "Suggestion added to your routine." });
  } catch (error) {
    res.status(500).json({ message: "Error adding suggestion to routine.", error });
  }
});

// Mark a suggestion as done
router.post("/routine/mark-done", async (req, res) => {
  const { user_id, suggestion_id } = req.body;

  try {
    const routine = await UserRoutine.findOne({ user_id, suggestion_id, status: "pending" });
    if (routine) {
      routine.status = "completed";
      await routine.save();
      res.json({ status: "success", message: "Suggestion marked as done." });
    } else {
      res.status(400).json({ message: "Suggestion not found in routine." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error marking suggestion as done.", error });
  }
});

// Get today's routine for a user
router.get("/routine/today", async (req, res) => {
  const { user_id } = req.query;

  try {
    const routine = await UserRoutine.find({ user_id, date: new Date().toLocaleDateString() }).populate('suggestion_id');
    res.json(routine);
  } catch (error) {
    res.status(500).json({ message: "Error fetching today's routine.", error });
  }
});

// Export the router for use in server.js
export default router;
