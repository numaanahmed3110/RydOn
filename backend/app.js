const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db.js");
const userRouter = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes.js");

const app = express();
dotenv.config();

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", userRouter);
app.use("/captains", captainRoutes);

module.exports = app;
