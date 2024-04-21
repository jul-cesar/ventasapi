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
  let totalVenta: number = 0;
  try {
    for (let { id } of dataV.productos) {
      const producto = await prisma.producto.findUnique({
        where: { id },
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
      totalVenta += dataV.cantidad * Number(producto.valor);
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
        total: totalVenta,
      },
    });
    return { success: true, Venta: newVenta };
  } catch (error) {
    console.error(error);
    return { success: false, errorMessage: "error al hacer la venta" };
  }
};
export const getVentas = async () => {
  const ventas = await prisma.ventas.findMany({
    include: { productos: true, usuario: true },
    orderBy: { fechaVenta: "desc" },
  });

  const ventasCorrectas = ventas.map((v) => ({
    ...v,
    total: v.total.toFixed(3),
    productos: v.productos.map((p) => ({
      ...p,
      valor: p.valor.toFixed(3),
    })),
   
  }));
  return ventasCorrectas;
};
