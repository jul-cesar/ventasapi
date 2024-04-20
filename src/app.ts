import express from "express";
import cors from "cors";
import "dotenv/config";
import { productosRoute } from "./rutas/productos";

const app = express();
app.use(express.json())
app.use(cors());
app.use(productosRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App corriendo en el puerto ${PORT}`);
});
