import { Router } from "express";
import { defaultR, defaultR2, defaultR4, defaultR5, defaultR3 } from "../../controllers/inventario/testing.controllers.js";

const router = Router();
router.get("/", defaultR);
router.get("/creacionCarta",defaultR2)
router.get("/modificacionCarta", defaultR3)
router.get("/descripcion", defaultR4)
router.get("/miCuenta", defaultR5)


export default router;
