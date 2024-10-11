import { Projects } from "../Models/projects";

export class ProjectService {
  // Get all projects
  async getAllProjects() {
    try {
      const projects = await Projects.find({});
      return projects;
    } catch (error) {
      console.log(error);
    }
  }
}

export const ProjectServices = new ProjectService();
