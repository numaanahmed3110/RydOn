const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");
const captainService = require("../service/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array(),
    });
  }

  const { fullname, email, password, vehicle } = req.body;
  const isCaptainAlreadyExists = await captainModel.findOne({ email });
  if (isCaptainAlreadyExists) {
    return res.status(400).json({
      message: "Captain Already exists",
    });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email: email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();
  res.status(200).json({ token, captain });
};

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({
      error: errors.array(),
    });
  }

  const { email, password } = req.body;

  const user = await captainModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({
      message: "Invalid Credentials",
    });
  }

  const isMatch = await user.comparePassswords(password);

  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid Password",
    });
  }

  const token = user.generateAuthToken();
  res.cookie("token", token);

  res.status(200).json({ token, user });
};

module.exports.getCaptainProfile = async (req, res, next) => {
  console.log(req.captain);

  return res.status(200).json({ captain: req.captain });
};

module.exports.logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await blacklistTokenModel.create({ token });

  res.clearCookie("token");

  res.status(200).json({
    message: "Captain Logged out Successfully",
  });
};
