import express from "express";
import { crearRouterFront } from "./routers/routerFront.js";
import { crearRouterProductos } from "./routers/routerProductos.js";

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views/pages");

app.use("/", crearRouterFront());
app.use("/api/productos", crearRouterProductos());

const server = app.listen(PORT, () => {
  console.log(`El servidor se inició en el puerto: ${PORT}`);
});
server.on("error", (error) => {
  console.error(`Error en el servidor: ${error.message}`);
});