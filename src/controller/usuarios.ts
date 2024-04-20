import { Request, Response } from "express";
import { createUser } from "../services/usuarios";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const response = await createUser(req.body);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};
