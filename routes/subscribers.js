const router = require("express").Router();
let painting = require("../models/subscriber.model");
const subscriberControllers = require("../controllers/subscriberControllers");
const mongoose = require("mongoose");

router.get("/", subscriberControllers.getSubscribers);
router.post("/", subscriberControllers.postSubsriber);

module.exports = router;
