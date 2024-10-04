import { Employees } from "../Models/employees";

export class EmployeeService {
  // get all employees
  async getEmployees() {
    try {
      const employees = await Employees.find({});
      return employees;
    } catch (error) {
      console.log(error);
    }
  }

  async createEmployee(data: Object) {
    try {
      const newEmployee = await Employees.create(data);
      return newEmployee;
    } catch (error) {
      console.log(error);
    }
  }
}

export const EmployeeServices = new EmployeeService();
