import mongoose from "mongoose";

const userRoutineSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // assuming you have a User model
  suggestion_id: { type: mongoose.Schema.Types.ObjectId, ref: "Suggestion", required: true }, // assuming you have a Suggestion model
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  added_to_routine: { type: Boolean, default: true },
  date: { type: Date, default: Date.now }, // default to current date/time
});

// Export the model using ES module syntax
const UserRoutine = mongoose.model("UserRoutine", userRoutineSchema);

export default UserRoutine;
