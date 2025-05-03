import express from 'express';
import Suggestion from '../models/UserSuggestion.js'; // Import the Suggestion model

const router = express.Router();

// Route to update the suggestion status
router.post('/update-status', async (req, res) => {
  const { userId, suggestionId, newStatus } = req.body;

  try {
    // Check if the suggestion already exists for the user
    const suggestion = await Suggestion.findOne({ userId, suggestionId });

    if (suggestion) {
      // If it's already marked as completed and being repeated, reset it to pending
      if (newStatus === 'pending' && suggestion.isCompleted) {
        suggestion.isCompleted = false;
        suggestion.completedCount = 0;
      } else if (newStatus === 'completed' && !suggestion.isCompleted) {
        suggestion.isCompleted = true;
        suggestion.completedCount += 1;
      }
      await suggestion.save(); // Save the updated suggestion
      return res.status(200).json({ message: 'Status updated successfully' });
    }

    // If suggestion doesn't exist, create it as pending
    const newSuggestion = new Suggestion({
      userId,
      suggestionId,
      isCompleted: false, // New suggestions are marked as pending
      completedCount: 0,
    });
    await newSuggestion.save();

    res.status(200).json({ message: 'New suggestion added as pending' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating suggestion status' });
  }
});

export default router;
