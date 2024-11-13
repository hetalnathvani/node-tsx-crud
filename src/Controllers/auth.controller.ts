import { Request, Response } from "express";
import { AuthServices } from "../Services/auth.service";

class authController {
  login = async (req: Request, res: Response) => {
    console.log(" hu chhu ahi");

    const response = AuthServices.login(req);
    // console.log(response);
  };
}

export const AuthController = new authController();
