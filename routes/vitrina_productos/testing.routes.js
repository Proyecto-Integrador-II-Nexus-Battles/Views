import { Router } from "express";
import { defaultR, defaultR2 } from "../../controllers/vitrina_productos/testing.controllers.js";

const router = Router();
router.get("/", defaultR);
router.get("/vistaDetallada", defaultR2);

export default router;
