const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "Firstname must be at least 3 chars long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Lastname must be at least 3 chars long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    matches: [/^\S+@\S\.\S+$/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    select: fasle,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active,inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Firstname must be at least 3 chars long"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Plate number should at least be 3 char long"],
    },
    capacity: {
      type: Number,
      required: true,
      minlength: [1, "Min-capacity should at least be 1"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "auto", "motorcycle"],
    },
  },
  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.comparePassswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPasswords = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel;
