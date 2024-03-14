const express = require("express");
const { model } = require("mongoose");
const applicationController = require("../controllers/applicationController");
const isAuth = require("../middlewares/auth");
const router = express.Router();
router.get(
  "/jobseeker/getall",
  isAuth,
  applicationController.jobSeekerGetAllApplications
);
router.get(
  "/employer/getall",
  isAuth,
  applicationController.employerGetAllApplications
);
router.delete(
  "/delete/:id",
  isAuth,
  applicationController.jobSeekerDeleteApplication
);
router.post("/post", isAuth, applicationController.postApplication);
module.exports = router;
