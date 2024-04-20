import { Producto } from "./producto";

export interface Venta {
  id?: string;
  usuarioId: string;
  productos: Producto[]
  cantidad: number;
  fechaVenta?: Date;
}
