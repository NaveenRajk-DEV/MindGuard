import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  category: String,
  risk_level: String,
  icon: String,
  is_active: Boolean,
});

const Suggestion = mongoose.model("Suggestion", suggestionSchema);

// Export the model using ES module syntax
export default Suggestion;
