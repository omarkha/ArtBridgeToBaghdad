const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const passport = require("passport");
const passportConfig = require("../passport");

router.post("/", userControllers.postUser);
router.post("/login", userControllers.loginUser);
router.get("/me", userControllers.getMe);

module.exports = router;
