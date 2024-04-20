import { prisma } from "../db/config";
import { Producto } from "../modelos/producto";

export const getProductos = async () => {
  const productos = await prisma.producto.findMany();
  return productos;
};

export const createProducto = async (data: Producto) => {
  const nuevoProducto = await prisma.producto.create({ data });
  return nuevoProducto
};
