const express = require("express");
const router = express.Router();

const resources = [
  { title: "📚 Understanding Anxiety & How to Manage It" },
  { title: "📺 Guided Meditation for Beginners (Video)" },
  { title: "📖 The Science Behind Mindfulness & Well-being" },
];

router.get("/", (req, res) => res.json(resources));

module.exports = router;
