import Joi from "joi";
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  clientName: { type: String },
  startDate: { type: Date },
  status: { type: String },
});

// Validation Schema
export const EmployeeSchemaValidate = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  clientName: Joi.string().required(),
  startDate: Joi.date().required(),
  status: Joi.string().required(),
});

export const Projects = mongoose.model("projects", ProjectSchema);
