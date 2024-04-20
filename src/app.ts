import express from "express";
import cors from "cors";
import "dotenv/config";
import { productosRoute } from "./routes/productos";
import { ventasRouter } from "./routes/ventas";
import { usariosRouter } from "./routes/usuarios";

const app = express();
app.use(express.json());
app.use(cors());
app.use(productosRoute);
app.use(ventasRouter);
app.use(usariosRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App corriendo en el puerto ${PORT}`);
});
