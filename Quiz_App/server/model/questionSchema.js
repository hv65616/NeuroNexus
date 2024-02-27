const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema({
  questions: {
    type: Array,
    required: true,
    default: [],
  },
  answers: {
    type: Array,
    required: true,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Questions = mongoose.model("Questions", questionSchema);
module.exports = Questions;
