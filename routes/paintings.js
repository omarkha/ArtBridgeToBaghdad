const router = require("express").Router();
let painting = require("../models/painting.model");
const {
  getPaintings,
  postPainting,
} = require("../controllers/paintingControllers");
const mongoose = require("mongoose");

router.get("/", getPaintings);
router.post("/", postPainting);

module.exports = router;
