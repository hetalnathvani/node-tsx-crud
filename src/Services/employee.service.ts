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

  async createEmployee() {
    try {
      
    } catch (error) {

    }
  }
}

export const EmployeeServices = new EmployeeService();
