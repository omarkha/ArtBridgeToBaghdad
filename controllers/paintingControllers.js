const express = require("express");
const cloudinary = require("cloudinary");
const upload = require("../utilities/multer");
const Painting = require("../models/painting.model");
const router = express.Router();

const uploadPaintingImage =
  ("/upload",
  upload.single("Image"),
  async (req, res) => {
    try {
      const result = await cloudinary.upload(req.file.path);
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  });

///////////////

const getPaintings = async ("/", (req, res) => {
    try{
        const painting = await Painting.find()
        res.json(painting);
      }catch(err){
        res.send("err " + err);
      }
  });

const postPainting =
  ("/",
  (req, res) => {
    const painting = new Painting(req.body);

    try {
      painting.save();
    } catch (err) {
      console.log(err);
    }
  });

const deletePainting = ("/:d", (req, res) => {});

const updatePainting = ("/:id", (req, res) => {});

const getSoldPaintings =
  ("/sold/",
  (req, res) => {
    res.json({ msg: "get ALL paintings" });
  });

const getSoldPainting =
  ("/sold/:id",
  (req, res) => {
    res.json({ msg: "get ALL paintings" });
  });

const postSoldPainting =
  ("/sold/:id",
  (req, res) => {
    res.json({ msg: "get ALL paintings" });
  });

const deleteSoldPainting =
  ("/sold/:id",
  (req, res) => {
    res.json({ msg: "get ALL paintings" });
  });

const updateSoldPainting =
  ("/sold/:id",
  (req, res) => {
    res.json({ msg: "get ALL paintings" });
  });

module.exports = {
  postPainting,
};
