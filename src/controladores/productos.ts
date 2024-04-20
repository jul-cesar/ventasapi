import { Request, Response } from "express";
import { createProducto, getProductos } from "../servicios/productos";

export const getProductosController = async (req: Request, res: Response) => {
  try {
    const response = await getProductos();
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

export const crearProductoController = async (req: Request, res: Response) => {
  try {
    const response = await createProducto(req.body);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};
