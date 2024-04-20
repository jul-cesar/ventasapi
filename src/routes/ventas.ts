import { Router } from "express";
import {
  createVentaController,
  getVentasController,
} from "../controller/ventas";

export const ventasRouter = Router();

ventasRouter.post("/ventas", createVentaController);
ventasRouter.get("/ventas", getVentasController);
