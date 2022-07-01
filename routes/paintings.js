const router = require("express").Router();
let painting = require("../models/painting.model");
const paintingControllers = require("../controllers/paintingControllers");
const mongoose = require("mongoose");

router.get("/", paintingControllers.getPaintings);
router.post("/", paintingControllers.postPainting);

module.exports = router;
