const Questions = require("../model/questionSchema");
const Result = require("../model/resultSchema");
const { questions, answers } = require("../database/data");
const getQuestions = async (req, res) => {
  try {
    const questions = await Questions.find();
    res.json(questions);
  } catch (error) {
    res.json({
      errorMsg: error,
    });
  }
};
const insertQuestions = async (req, res) => {
  try {
    await Questions.insertMany({ questions: questions, answers: answers }).then(
      (err, data) => {
        res.json({ msg: "Questions saved successfully" });
      }
    );
  } catch (error) {
    res.json({
      errorMsg: error,
    });
  }
};
const dropQuestions = async (req, res) => {
  try {
    await Questions.deleteMany();
    res.json({
      msg: "Questions deleted successfully",
    });
  } catch (error) {
    res.json({
      errorMsg: error,
    });
  }
};
const getAllResult = async (req, res) => {
  res.json("Result get");
};
const storeResult = async (req, res) => {
  res.json("Result store");
};
const deleteAllResult = async (req, res) => {
  res.json("Result Delete");
};
module.exports = {
  getQuestions,
  insertQuestions,
  dropQuestions,
  getAllResult,
  storeResult,
  deleteAllResult,
};
