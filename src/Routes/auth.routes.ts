import express from "express";
import { AuthController } from "../Controllers/auth.controller";

export const AuthRoutes = express.Router();

AuthRoutes.post("/login", AuthController.login);
