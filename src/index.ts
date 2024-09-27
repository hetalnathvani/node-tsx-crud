import express from "express";
import mongoose from "mongoose";

const app = express();
const mangoose = require("mangoose");

const mongoURI = "mongodb://localhost:27017/crud_tsx";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  console.log(req);
  console.log(res);

  res.send("Hello, Node!");
});

const port = 3002;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = connectDB;
