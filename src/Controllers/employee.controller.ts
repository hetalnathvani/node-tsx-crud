import { Request, Response } from "express";
import { EmployeeServices } from "../Services/employee.service";
import { EmployeeSchemaValidate } from "../Models/employees";

class employeeController {
  // get all employees
  getEmployees = async (req: Request, res: Response) => {
    const employees = await EmployeeServices.getEmployees();
    res.send(employees);
  };

  // create an employee
  createEmployee = async (req: Request, res: Response) => {
    const data = {
      name: req.body.name,
      email: req.body.email,
      projects: req.body.projects,
      city: req.body.city,
      education: req.body.education,
    };

    const { error, value } = EmployeeSchemaValidate.validate(data);

    if (error) {
      res.send(error.message);
    } else {
      const employee = await EmployeeServices.createEmployee(value);
      res
        .status(201)
        .send({ data: employee, message: "Employee Created SuccessFully!!!" });
    }
  };
}

export const EmployeeController = new employeeController();
