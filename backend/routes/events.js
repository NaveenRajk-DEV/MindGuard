const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Fetch event details by title
router.get("/:title", async (req, res) => {
  try {
    const event = await Event.findOne({ title: req.params.title });
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// RSVP to an event
router.post("/:title/rsvp", async (req, res) => {
  try {
    const { userId } = req.body;
    const event = await Event.findOneAndUpdate(
      { title: req.params.title },
      { $addToSet: { attendees: userId } },
      { new: true }
    );
    res.json({ message: "RSVP successful", event });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
