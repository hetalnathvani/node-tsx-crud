import { Request, Response } from "express";
import { AuthServices } from "../Services/auth.service";

class authController {
  login = async (req: Request, res: Response) => {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };

    console.log(data);
    
    const response = AuthServices.login(data);
    // console.log(response);
  };
}

export const AuthController = new authController();
