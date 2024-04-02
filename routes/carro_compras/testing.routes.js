import { Router } from "express";
import { defaultR, defaultR2 } from "../../controllers/carro_compras/testing.controllers.js";

const router = Router();
router.get("/", defaultR);
router.get("/", defaultR2);

export default router;

