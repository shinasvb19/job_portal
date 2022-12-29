const mongoose = require("mongoose");
const dotenv = require("dotenv");

const config = async () => {
  mongoose
    .connect(process.env.mongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected mongoose");
    })
    .catch((err) => {
      console.log("OH NO MONGO CONNECTION ERROR!!!!");
      console.log(err);
    });
};
module.exports = config;
