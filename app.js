const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const conversationsRouter = require("./routes/conversation");

app.use(morgan("dev"));
app.use(express.json());

app.use(cors({ origin: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", conversationsRouter);

module.exports = app;
