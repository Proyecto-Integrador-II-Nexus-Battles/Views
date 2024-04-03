import { Router } from "express";
import { defaultR, defaultR2, defaultR3, defaultR4, defaultR5, defaultR6, defaultR7,defaultR8} from "../../controllers/vitrina_productos/testing.controllers.js";

const router = Router();
router.get("/", defaultR);
router.get("/vistaDetallada/:id", defaultR2);
router.get("/filteredCards/", defaultR4);
router.post("/vitrina/enviarCarro", defaultR5);
router.post("/vitrina/enviarListaDeseos", defaultR6);
router.post("/vitrina/eliminarListaDeseos", defaultR7);
router.post("/vitrina/miCuenta", defaultR8)


export default router;
