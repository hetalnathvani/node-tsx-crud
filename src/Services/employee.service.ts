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

  async updateEmployee(id: String, data: Object) {
    try {
      const employee = await Employees.findByIdAndUpdate({ _id: id }, data, {
        new: true,
      });

      if (!employee) {
        return "Employee not found !!!";
      }

      return employee;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteEmployee(id: String) {
    try {
      const employee = await Employees.findByIdAndDelete(id);

      if (!employee || employee == null) {
        return {
          status: false,
          message: "Employee not found !!!",
        };
      }

      return employee;
    } catch (error) {
      console.log(error);
    }
  }
}

export const EmployeeServices = new EmployeeService();
