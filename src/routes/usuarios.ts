import { Router } from "express";
import { createUserController } from "../controller/usuarios";

export const usariosRouter = Router();

usariosRouter.post("/usuarios", createUserController);
