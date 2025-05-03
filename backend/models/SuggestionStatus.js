import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  suggestionId: { type: String, required: true }, // category-risk-index
  suggestion: { type: String, required: true },
  count: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
});

const SuggestionStatus = mongoose.model("SuggestionStatus", suggestionSchema);

export default SuggestionStatus;
