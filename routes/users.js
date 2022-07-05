const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

router.post("/", userControllers.postUser);
router.post("/login", userControllers.loginUser);
router.get("/me", userControllers.getMe);

module.exports = router;
