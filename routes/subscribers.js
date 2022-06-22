const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "get ALL subscribers" });
});

router.post("/:id", (req, res) => {});

router.delete("/:d", (req, res) => {});

router.patch("/:id", (req, res) => {});

router.get("/removed/", (req, res) => {
  res.json({ msg: "get ALL subscribers" });
});

router.post("/removed/:id", (req, res) => {});

router.delete("/removed/i:d", (req, res) => {});

router.patch("/removed/:id", (req, res) => {});

module.exports = router;
