import { Producto } from "./producto";

export interface Venta {
  id?: string;
  usuarioId: string;
  total: number;
  productos: Producto[];
  cantidad: number;
  fechaVenta?: Date;
}
