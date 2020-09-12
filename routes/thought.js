const express = require("express");
const db = require("../db/models");
const { Message, Thought } = db;

const { asyncHandler } = require("../utils");

const router = express.Router();

router.get(
  "/messages/:id(\\d+)/thoughts",
  asyncHandler(async (req, res) => {
    const messageId = parseInt(req.params.id, 10);
    const thoughts = await Thought.findAll({
      where: { messageId },
      order: [["createdAt", "DESC"]],
    });
    if (thoughts) {
      res.json({ thoughts });
    }
  })
);

router.post(
  "/messages/:id(\\d+)/thoughts",
  asyncHandler(async (req, res) => {
    const messageId = parseInt(req.params.id, 10);
    const { text, dateTime } = req.body;
    const thought = await Thought.create({ text, dateTime, messageId });
    res.status(201).json({ thought });
  })
);

module.exports = router;
