import { Request, Response } from "express";
import { ProjectServices } from "../Services/project.service";

class projectsController {
  // get all projects
  getAllProjects = async (req: Request, res: Response) => {
    const projects = await ProjectServices.getAllProjects();
    res.send({
      status: "Success",
      data: projects,
      message: "Projects list sent successfully !!!",
    });
  };

  // get project By id
  getProjectById = async(req: Request, res: Response) => {
    const project = await ProjectServices.getProjectById();
    res.send({
      status: "Success",
      data: project,
      message: "Project fetched successfully !!!",
    });
  }
}

export const ProjectsController = new projectsController();
