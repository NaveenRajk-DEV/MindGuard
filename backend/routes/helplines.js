const express = require("express");
const router = express.Router();

const helplines = [
  { service: "Mental Health Hotline", number: "1800-123-456" },
  { service: "Suicide Prevention", number: "1800-987-654" },
  { service: "Counseling Services", number: "1800-555-789" },
];

router.get("/", (req, res) => res.json(helplines));

module.exports = router;
