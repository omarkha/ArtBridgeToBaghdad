const express = require("express");
const cloudinary = require("cloudinary");
const upload = require("../utilities/multer");
const Painting = require("../models/painting.model");
const router = express.Router();

const getPaintings = async (req, res) => {
  try {
    const painting = await Painting.find();
    res.json(painting);
  } catch (err) {
    res.send("err " + err);
  }
};

const postPainting = (req, res) => {
  const painting = new Painting(req.body);

  try {
    painting.save();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  postPainting,
  getPaintings,
};
