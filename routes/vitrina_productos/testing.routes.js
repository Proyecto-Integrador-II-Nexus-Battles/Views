import { Router } from "express";
import { defaultR, defaultR2, defaultR3, defaultR4, defaultR5 } from "../../controllers/vitrina_productos/testing.controllers.js";

const router = Router();
router.get("/", defaultR);
router.get("/vistaDetallada/:id", defaultR2);
router.get("/filteredCards/", defaultR4);
router.post("/vitrina/enviarCarro", defaultR5);

export default router;
