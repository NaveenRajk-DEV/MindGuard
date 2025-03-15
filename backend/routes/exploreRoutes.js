import express from 'express';
import JournalEntry from '../models/JournalEntry.js'; // ✅ Import your JournalEntry model

const router = express.Router();

// ✅ GET /api/explore - Fetch all journal entries
router.get('/', async (req, res) => {
  try {
    const entries = await JournalEntry.find();
    res.json({ entries });
  } catch (error) {
    res.status(500).json({ message: "Error fetching explore entries", error: error.message });
  }
});

export default router;
