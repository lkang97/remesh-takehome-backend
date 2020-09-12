const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(cors({ origin: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
