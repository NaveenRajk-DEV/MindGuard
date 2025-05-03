// controllers/exerciseStatusController.js
import ExerciseStatus from '../models/ExerciseStatus.js';

export const getExerciseStatus = async (req, res) => {
  try {
    const { userId } = req.query;
    const statuses = await ExerciseStatus.find({ userId });
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get exercise status', error });
  }
};

export const updateExerciseStatus = async (req, res) => {
  try {
    const { userId, exerciseId, status } = req.body;

    if (!userId || !exerciseId || !status) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const updatedStatus = await ExerciseStatus.findOneAndUpdate(
      { userId, exerciseId },
      { status },
      { new: true, upsert: true }
    );

    res.status(200).json(updatedStatus);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update exercise status', error });
  }
};
