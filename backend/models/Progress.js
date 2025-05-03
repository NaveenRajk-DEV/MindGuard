import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  exerciseId: { type: String, required: true },
  status: { type: String, enum: ['completed', 'pending'], default: 'pending' }
});

const Progress = mongoose.model('Progress', progressSchema);
export default Progress;
