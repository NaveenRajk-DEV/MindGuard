import mongoose from 'mongoose';

const suggestionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  suggestionId: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  completedCount: { type: Number, default: 0 },
});

export default mongoose.model('Suggestion', suggestionSchema);
