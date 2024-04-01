const express = require("express");
const { model } = require("mongoose");
const jobController = require("../controllers/jobController");
const isAuth = require("../middlewares/auth");
const router = express.Router();
router.get("/getall", jobController.getAllJobs);
router.post("/post",isAuth,jobController.postJob)
router.get("/getmyjobs", isAuth,jobController.getMyJobs);
router.put("/update/:id", isAuth, jobController.updateJob);
router.delete("/delete/:id", isAuth, jobController.deleteJob);
router.get("/:id", isAuth, jobController.getSingleJob);
module.exports = router;
