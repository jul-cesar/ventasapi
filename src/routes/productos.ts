import { Router } from "express";
import {
  crearProductoController,
  getProductosController,
} from "../controller/productos";

export const productosRoute = Router();

productosRoute.get("/productos", getProductosController);
productosRoute.post("/productos", crearProductoController);
