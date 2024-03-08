const express = require("express");
const cookieparser = require("cookie-parser");
const userController = require("../controllers/userController");
const isauth = require("../middlewares/auth");
const router = express.Router();
router.use(cookieparser());

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", isauth, userController.logout);
module.exports = router;
