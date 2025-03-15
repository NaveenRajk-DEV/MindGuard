const mongoose = require("mongoose");

const TherapistSchema = new mongoose.Schema({
  name: String,
  specialty: String,
});

module.exports = mongoose.model("Therapist", TherapistSchema);
