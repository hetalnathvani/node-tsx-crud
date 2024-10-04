import express from "express";
import { EmployeeController } from "../Controllers/employee.controller";

// initiating the router
export const router = express.Router();

// get employees
router.get("/", EmployeeController.getEmployees);

// create employee
router.post("/add", EmployeeController.createEmployee);

// update employee
router.put("/update/:id", EmployeeController.updateEmployee);

// delete employee
router.delete("/delete/:id", EmployeeController.deleteEmployee);

// view employee
router.get("/view/:id", EmployeeController.viewEmployee);
