const express = require("express");
const { model } = require("mongoose");
const register = require("../controllers/userController");
const router = express.Router();

router.post("/register", register);
module.exports = router;
