import { Router } from "express";
import {
  listaDeseos,
  moverCartaCarro,
} from "../../controllers/lista_deseos/controller.js";

const listaDeseosRouter = Router();
listaDeseosRouter.get("/lista_deseos", listaDeseos);
listaDeseosRouter.post("/deseos/moverCarta", moverCartaCarro);
listaDeseosRouter.post("/deseos/eliminar/:id", eliminarItemDeseos);

export default listaDeseosRouter;
