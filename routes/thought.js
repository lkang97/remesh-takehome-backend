const express = require("express");
const db = require("../db/models");
const { Thought } = db;

const { asyncHandler } = require("../utils");

const router = express.Router();

// This route will grab all the thoughts for a message by message id
router.get(
  "/messages/:id(\\d+)/thoughts",
  asyncHandler(async (req, res) => {
    const messageId = parseInt(req.params.id, 10);
    const thoughts = await Thought.findAll({
      where: { messageId },
      order: [["createdAt", "ASC"]],
    });
    if (thoughts) {
      res.json({ thoughts });
    }
  })
);

// This route will add a new thought to a message by message id
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
