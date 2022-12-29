const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRoutes = require("./router/userRouter");
const postRoutes = require("./router/postRouter");
const connectDb = require("./config/config");
app.use(express.json());
dotenv.config();
connectDb();
app.use("/", userRoutes);
app.use("/post", postRoutes);
app.listen(5000, () => {
  console.log("up and running !!!!");
});
