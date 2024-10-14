import express from "express";
import { ProjectsController } from "../Controllers/projects.controller";

export const ProjectRoutes = express.Router();

// get projects
ProjectRoutes.get("/projects/", ProjectsController.getAllProjects);

// get projects
ProjectRoutes.get("/projects/view/:id", ProjectsController.getProjectById);
