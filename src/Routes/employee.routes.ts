import express from "express";
import { EmployeeController } from "../Controllers/employee.controller";

// initiating the router
export const router = express.Router();

// get employees
router.get("/", EmployeeController.getEmployees);
