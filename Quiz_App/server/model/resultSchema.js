const mongoose = require("mongoose");
const resultSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  result: {
    type: Array,
    default: [],
  },
  attempts: {
    type: Number,
    default: 0,
  },
  points: {
    type: Number,
    default: 0,
  },
  achived: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Result = mongoose.model("Result", resultSchema);
module.exports = Result;
