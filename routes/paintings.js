const router = require("express").Router();
let painting = require("../models/league.model");
const paintingController = require("../controllers/paintingControllers.js");
const mongoose = require("mongoose");

router.post("/api/paintings", paintingController.postPainting);

module.exports = router;
