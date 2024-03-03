//Este es un archivo de ejemplo de una ruta de Node.js. Reemplazar por otro archivo con rutas reales.

import { Router } from "express";
import { listaDeseos } from "../../controllers/lista_deseos/controller.js";

const listaDeseosRouter = Router();
listaDeseosRouter.get("/lista_deseos", listaDeseos);


export default listaDeseosRouter;
