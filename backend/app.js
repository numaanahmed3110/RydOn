const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDb = require("./db/db.js");

const app = express();
dotenv.config();

connectToDb();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
