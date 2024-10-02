import { Request, Response } from "express";
import { EmployeeServices } from "../Services/employee.service";

class employeeController {
  // get all employees
  getEmployees = async (req: Request, res: Response) => {
    const employees = await EmployeeServices.getEmployees();
    res.send(employees);
  };
}

export const EmployeeController = new employeeController();
