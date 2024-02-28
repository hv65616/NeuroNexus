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
  try {
    const result = await Result.find();
    res.json(result);
  } catch (error) {
    res.json({ error });
  }
};
const storeResult = async (req, res) => {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data Not Provided....!!!");
    Result.create({ username, result, attempts, points, achived }).then(
      (err, data) => {
        res.json({ msg: "Result Saved" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
};
const deleteAllResult = async (req, res) => {
  try {
    await Result.deleteMany();
    res.json({
      msg: "Result Deleted",
    });
  } catch (error) {
    res.json({ error });
  }
};
module.exports = {
  getQuestions,
  insertQuestions,
  dropQuestions,
  getAllResult,
  storeResult,
  deleteAllResult,
};
