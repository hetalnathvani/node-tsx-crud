import express from "express";
import mongoose from "mongoose";

const app = express();
const mongoURI =
  "mongodb+srv://nathvanihetal:Q8RsBm1QF8m087sI@cluster0.u1r3o.mongodb.net/crud_tsx";

mongoose.connect(mongoURI);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const EmployeeSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  projects: { type: String },
  city: { type: String },
  education: { type: String },
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);

app.get("/", async (req, res) => {
  let data = await EmployeeModel.find({});
  res.json(data);
});

const port = 3002;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
