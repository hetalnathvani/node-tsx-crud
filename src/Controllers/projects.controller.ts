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
}

export const ProjectsController = new projectsController();
