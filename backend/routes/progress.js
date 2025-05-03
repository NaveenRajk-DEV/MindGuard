import express from 'express';
import Progress from '../models/Progress.js';

const router = express.Router();

// Save or update progress
router.post('/', async (req, res) => {
  const { userId, exerciseId, status } = req.body;

  try {
    let progress = await Progress.findOne({ userId, exerciseId });

    if (progress) {
      progress.status = status;
      await progress.save();
    } else {
      progress = new Progress({ userId, exerciseId, status });
      await progress.save();
    }

    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save progress' });
  }
});

// Get progress by user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const progress = await Progress.find({ userId });
    const result = {};
    progress.forEach(p => {
      result[p.exerciseId] = p.status;
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch progress' });
  }
});

export default router;
