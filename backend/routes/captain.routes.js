const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("Firstname must be at least 3 char long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 char long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 char long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Number PLate must be at least 3 char long"),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType")
      .isIn(["car", "auto", "motorcycle"])
      .withMessage("Invallid vehicle type"),
  ],
  captainController.registerCaptain
);

module.exports = router;
