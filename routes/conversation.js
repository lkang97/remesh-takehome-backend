const express = require("express");
const db = require("../db/models");
const { Conversation } = db;

const { asyncHandler } = require("../utils");

const router = express.Router();

router.get(
  "/conversations",
  asyncHandler(async (req, res) => {
    const conversations = await Conversation.findAll({
      order: [["updatedAt", "DESC"]],
    });
    if (conversations) {
      res.json({ conversations });
    }
  })
);

router.post(
  "/conversations",
  asyncHandler(async (req, res) => {
    const { title, startDate } = req.body;
    const conversation = await Conversation.create({ title, startDate });
    res.status(201).json({ conversation });
  })
);

module.exports = router;
