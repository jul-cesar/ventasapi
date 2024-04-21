import { prisma } from "../db/config";
import { Producto } from "../models/producto";

export const getProductos = async () => {
  const productos = await prisma.producto.findMany({
    include: { Ventas: true},
  });
  return productos;
};

export const createProducto = async (data: Producto) => {
  const nuevoProducto = await prisma.producto.create({ data });
  return nuevoProducto;
};

export const editProducto = async (id: string, cantidad: number) => {
  const editedProducto = await prisma.producto.update({
    where: { id },
    data: {
      cantidad: { decrement: cantidad },
    },
  });
  return editedProducto;
};
