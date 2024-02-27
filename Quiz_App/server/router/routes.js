const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insertQuestions)
  .delete(controller.dropQuestions);

router
  .route("/result")
  .get(controller.getAllResult)
  .post(controller.storeResult)
  .delete(controller.deleteAllResult);
module.exports = router;
