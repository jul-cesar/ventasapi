import { Request, Response } from "express";
import { createVenta, getVentas } from "../services/ventas";

export const createVentaController = async (req: Request, res: Response) => {
  try {
    const response = await createVenta(req.body);
    if (!response.success) {
      res.status(403).send(response.errorMessage);
    }
    res.send(response.Venta);
  } catch (error) {
    console.error(error);
  }
};

export const getVentasController = async (req: Request, res: Response) => {
  try {
    const response = await getVentas();
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};
