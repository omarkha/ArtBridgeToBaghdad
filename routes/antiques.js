const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "get ALL paintings" });
});

router.post("/:id", (req, res) => {});

router.delete("/:d", (req, res) => {});

router.patch("/:id", (req, res) => {});

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
