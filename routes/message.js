const express = require("express");
const db = require("../db/models");
const { Message } = db;

const { asyncHandler } = require("../utils");

const router = express.Router();

// This route will get all the messages for a conversation by conversation id
router.get(
  "/conversations/:id(\\d+)/messages",
  asyncHandler(async (req, res) => {
    const conversationId = parseInt(req.params.id, 10);
    const messages = await Message.findAll({
      where: { conversationId },
      order: [["createdAt", "ASC"]],
    });
    if (messages) {
      res.json({ messages });
    }
  })
);

// This route will create a new message for a conversation by conversation id.
router.post(
  "/conversations/:id(\\d+)/messages",
  asyncHandler(async (req, res) => {
    const conversationId = parseInt(req.params.id, 10);
    const { text, dateTime } = req.body;
    const message = await Message.create({ text, dateTime, conversationId });
    res.status(201).json({ message });
  })
);

module.exports = router;
