import { Request, Response } from "express";
import { EmployeeServices } from "../Services/employee.service";
import { EmployeeSchemaValidate } from "../Models/employees";

class employeeController {
  // get all employees
  getEmployees = async (req: Request, res: Response) => {
    const employees = await EmployeeServices.getEmployees();
    res.status(201).send({
      status: "Success",
      data: employees,
      message: "Employees list sent Successfully!!!",
    });
  };

  // create an employee
  createEmployee = async (req: Request, res: Response) => {
    const data = {
      name: req.body.name,
      email: req.body.email,
      projects: req.body.projects,
      city: req.body.city,
      education: req.body.education,
      designation: req.body.designation,
      joiningDate: req.body.joiningDate,
      startDate: req.body.startDate,
      status: req.body.status,
    };

    const { error, value } = EmployeeSchemaValidate.validate(data);

    if (error) {
      res.send(error.message);
    } else {
      const employee = await EmployeeServices.createEmployee(value);
      res.status(201).send({
        status: "Success",
        data: employee,
        message: "Employee Created SuccessFully!!!",
      });
    }
  };

  // Update an employee
  updateEmployee = async (req: Request, res: Response) => {
    const data = {
      name: req.body.name,
      email: req.body.email,
      projects: req.body.projects,
      city: req.body.city,
      education: req.body.education,
      designation: req.body.designation,
      joiningDate: req.body.joiningDate,
      startDate: req.body.startDate,
      status: req.body.status,
    };

    const { error, value } = EmployeeSchemaValidate.validate(data);

    if (error) {
      res.send(error.message);
    } else {
      const id = req.params.id;
      const employee = await EmployeeServices.updateEmployee(id, value);
      res.status(201).send({
        status: "Success",
        data: employee,
        message: "Employee Updated SuccessFully!!!",
      });
    }
  };

  // Delete an employee
  deleteEmployee = async (req: Request, res: Response) => {
    const id = req.params.id;
    const response: any = await EmployeeServices.deleteEmployee(id);

    if (response?.status == false) {
      res.status(201).send({
        status: "Error",
        message: response.message,
      });
    } else {
      res.status(201).send({
        status: "Success",
        message: "Employee Deleted SuccessFully!!!",
      });
    }
  };

  // View an employee
  viewEmployee = async (req: Request, res: Response) => {
    const id = req.params.id;
    const response: any = await EmployeeServices.viewEmployee(id);

    if (response.length == 0) {
      res.status(201).send({
        status: "Error",
        message: "Employee Not Found!!!",
      });
    } else {
      res.status(201).send({
        status: "Success",
        message: "Employee Data Fetched SuccessFully!!!",
        data: response,
      });
    }
  };
}

export const EmployeeController = new employeeController();
