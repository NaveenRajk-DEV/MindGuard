// routes/exerciseStatus.js
import express from 'express';
import { getExerciseStatus, updateExerciseStatus } from '../controllers/exerciseStatusController.js';

const router = express.Router();

router.get('/', getExerciseStatus);       // e.g., GET /api/exerciseStatus?userId=123
router.post('/', updateExerciseStatus);   // e.g., POST /api/exerciseStatus { userId, exerciseId, status }

export default router;
