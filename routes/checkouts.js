const router = require("express").Router();
let painting = require("../models/painting.model");
const checkoutControllers = require("../controllers/checkoutControllers");
const mongoose = require("mongoose");

router.post("/", checkoutControllers.createCheckoutSession);

module.exports = router;
