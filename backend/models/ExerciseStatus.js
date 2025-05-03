// models/ExerciseStatus.js
import mongoose from 'mongoose';

const exerciseStatusSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  exerciseId: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
}, { timestamps: true });

const ExerciseStatus = mongoose.model('ExerciseStatus', exerciseStatusSchema);
export default ExerciseStatus;
