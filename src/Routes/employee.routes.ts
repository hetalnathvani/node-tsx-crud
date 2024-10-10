import express from "express";
import { EmployeeController } from "../Controllers/employee.controller";

export const EmployeeRoutes = express.Router();

// get employees
EmployeeRoutes.get("/employees/", EmployeeController.getEmployees);

// create employee
EmployeeRoutes.post("/employees/add", EmployeeController.createEmployee);

// update employee
EmployeeRoutes.put("/employees/update/:id", EmployeeController.updateEmployee);

// delete employee
EmployeeRoutes.delete(
  "/employees/delete/:id",
  EmployeeController.deleteEmployee
);

// view employee
EmployeeRoutes.get("/employees/view/:id", EmployeeController.viewEmployee);
