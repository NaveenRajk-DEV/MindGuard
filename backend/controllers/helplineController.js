import Helpline from "../models/Helpline.js";

// @desc Get all helplines
// @route GET /api/helplines
export const getHelplines = async (req, res) => {
  try {
    const helplines = await Helpline.find();
    res.status(200).json(helplines);
  } catch (error) {
    res.status(500).json({ message: "Error fetching helplines", error });
  }
};

// @desc Add a new helpline
// @route POST /api/helplines
export const addHelpline = async (req, res) => {
  try {
    const { service, number } = req.body;
    const newHelpline = new Helpline({ service, number });
    await newHelpline.save();
    res.status(201).json({ message: "Helpline added successfully", newHelpline });
  } catch (error) {
    res.status(500).json({ message: "Error adding helpline", error });
  }
};
