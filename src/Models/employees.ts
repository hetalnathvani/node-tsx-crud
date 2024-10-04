import Joi from "joi";
import mongoose from "mongoose";

// Creating an interface
const EmployeeSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  projects: { type: String },
  city: { type: String },
  education: { type: String },
});

// Validation Schema
export const EmployeeSchemaValidate = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  projects: Joi.string().required(),
  city: Joi.string().required(),
  education: Joi.string().required(),
});

export const Employees = mongoose.model("employees", EmployeeSchema);
