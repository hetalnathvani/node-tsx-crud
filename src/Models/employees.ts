import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  projects: { type: String },
  city: { type: String },
  education: { type: String },
});

export const Employees = mongoose.model("employees", EmployeeSchema);
