const express = require("express");

const router = express.Router();

const flightController = require("../controllers/flightController");

router.use("/getPrices", flightController.getPrice);

router.use("/", flightController.getHomePage);

module.exports = router;
