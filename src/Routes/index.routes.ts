import express from "express";
import { EmployeeRoutes } from "./employee.routes";

// initiating the router
export const router = express.Router();

// Employee Routes
router.use(EmployeeRoutes);
