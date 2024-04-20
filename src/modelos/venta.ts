import { Producto } from "./producto";
import { Usuario } from "./usuario";

export interface Venta {
  id?: string;

  usuarioId: string;
  productos: Producto[];
  cantidad: number;
  fechaVenta: Date;
}
