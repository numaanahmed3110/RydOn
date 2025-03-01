const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: [3, "Firstname must be at leasat 3 char long"],
  },
  lastname: {
    type: String,
    minlength: [3, "Firstname must be at leasat 3 char long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be at leasat 5 char long"],
  },
  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
  },
});
