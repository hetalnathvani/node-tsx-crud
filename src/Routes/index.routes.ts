import express from "express";
import { EmployeeRoutes } from "./employee.routes";
import { ProjectRoutes } from "./project.routes";

// initiating the router
export const router = express.Router();

// Employee Routes
router.use(EmployeeRoutes);

// Project Routes
router.use(ProjectRoutes);
