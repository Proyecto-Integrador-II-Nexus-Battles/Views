import { Router } from "express";
import { defaultR, defaultR2, defaultR4, defaultR5, defaultR3, defaultR6, defaultR7 } from "../../controllers/inventario/testing.controllers.js";

const router = Router();
router.get("/", defaultR);
router.get("/creacionCarta",defaultR2)
router.get("/modificacionCarta", defaultR3)
router.get("/descripcion", defaultR4)
router.get("/miCuenta", defaultR5)
router.get("/modificacionCartaDescripcion", defaultR6)
router.get("/jugarOnline", defaultR7)


export default router;
