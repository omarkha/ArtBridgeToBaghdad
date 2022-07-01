const express = require("express");
const cloudinary = require("cloudinary");
const upload = require("../utilities/multer");
const Painting = require("../models/painting.model");
const router = express.Router();

router.post("/upload", upload.single("Image"), async (req, res) => {
  try {
    const result = await cloudinary.upload(req.file.path);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

///////////////

router.get("/", (req, res) => {
  res.json({ msg: "get ALL paintings" });
});

router.post("/", (req, res) => {
  const painting = new Painting();
  painting.title = req.params.title;
  painting.width = req.params.width;
  painting.price = req.params.price;
  painting.img_url = req.params.img_url;

  try {
    painting.save();
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:d", (req, res) => {});

router.patch("/:id", (req, res) => {});

router.get("/sold/", (req, res) => {
  res.json({ msg: "get ALL paintings" });
});

router.get("/sold/:id", (req, res) => {
  res.json({ msg: "get ALL paintings" });
});

router.post("/sold/:id", (req, res) => {
  res.json({ msg: "get ALL paintings" });
});

router.delete("/sold/:id", (req, res) => {
  res.json({ msg: "get ALL paintings" });
});

router.patch("/sold/:id", (req, res) => {
  res.json({ msg: "get ALL paintings" });
});

module.exports = router;
