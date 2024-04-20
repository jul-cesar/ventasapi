import { Ventas } from "@prisma/client";
import { prisma } from "../db/config";
import { Venta } from "../models/venta";
import { editProducto } from "./productos";

interface createVentaResponse {
  success: boolean;
  Venta?: Ventas;
  errorMessage?: string;
}

export const createVenta = async (
  dataV: Venta
): Promise<createVentaResponse> => {
  try {
    for (let { id } of dataV.productos) {
      const producto = await prisma.producto.findUnique({
        where: { id },
        select: { cantidad: true },
      });

      if (!producto) {
        return { success: false, errorMessage: "Producto no existente" };
      }

      if (dataV.cantidad > producto.cantidad) {
        return {
          success: false,
          errorMessage: `La cantidad de compra para el producto con id ${id} es mayor a la cantidad disponible`,
        };
      }
    }
    for (let producto of dataV.productos) {
      await editProducto(producto.id ?? "", dataV.cantidad);
    }
    const newVenta = await prisma.ventas.create({
      include: { productos: true },
      data: {
        usuarioId: dataV.usuarioId,
        cantidad: dataV.cantidad,
        productos: {
          connect: dataV.productos.map((producto) => ({ id: producto.id })),
        },
      },
    });
    return { success: true, Venta: newVenta };
  } catch (error) {
    console.error(error);
    return { success: false, errorMessage: "error al hacer la venta" };
  }
};

export const getVentas = async () => {
  const ventas = prisma.ventas.findMany({ include: { productos: true } });
  return ventas;
};
