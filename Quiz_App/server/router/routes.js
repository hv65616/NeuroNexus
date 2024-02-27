const express = require("express");
const router = express.Router();

router.get("/questions", (req, res) => {
  res.json("Questions API");
});
module.exports = router;
