const express = require("express");
const { model } = require("mongoose");
const jobController = require("../controllers/jobController");
const isAuth = require("../middlewares/auth");
const router = express.Router();
router.get("/getall", jobController.getAllJobs);
router.post("/post",isAuth,jobController.postJob)
router.get("/getmyjobs", isAuth,jobController.getMyJobs);
router.put("/update/:id", isAuth, jobController.updateJob);
module.exports = router;
