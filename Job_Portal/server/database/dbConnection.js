const mongoose = require("mongoose");
const db = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "JOB_PORTAL_MERN",
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(`Error:-${err}`);
    });
};

module.exports = db;
