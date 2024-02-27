const getQuestions = async (req, res) => {
  res.json("Questions API");
};
const insertQuestions = async (req, res) => {
  res.json("Questions post");
};
const dropQuestions = async (req, res) => {
  res.json("Questions drop");
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
  deleteAllResult
};
