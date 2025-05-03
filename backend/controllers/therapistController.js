import Therapist from "../models/Therapist.js";

// @desc Get all therapists
// @route GET /api/therapists
export const getTherapists = async (req, res) => {
  try {
    const therapists = await Therapist.find();
    res.status(200).json(therapists);
  } catch (error) {
    res.status(500).json({ message: "Error fetching therapists", error });
  }
};

// @desc Add a new therapist
// @route POST /api/therapists
export const addTherapist = async (req, res) => {
  try {
    const { name, specialty } = req.body;
    const newTherapist = new Therapist({ name, specialty });
    await newTherapist.save();
    res.status(201).json({ message: "Therapist added successfully", newTherapist });
  } catch (error) {
    res.status(500).json({ message: "Error adding therapist", error });
  }
};
