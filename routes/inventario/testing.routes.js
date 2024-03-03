import { Router } from "express";
import { defaultR, defaultR2 } from "../../controllers/inventario/testing.controllers.js";

const router = Router();
router.get("/", defaultR);
router.get("/creacionCarta",defaultR2)

export default router;
