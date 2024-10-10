import express from "express";
import { ProjectsController } from "../Controllers/projects.controller";

export const ProjectRoutes = express.Router();

// get projects
ProjectRoutes.get("/", ProjectsController.getAllProjects);
