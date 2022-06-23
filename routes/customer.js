const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "get ALL paintings" });
});

router.post("/:id", (req, res) => {});

router.delete("/:d", (req, res) => {});

router.patch("/:id", (req, res) => {});

module.exports = router;
