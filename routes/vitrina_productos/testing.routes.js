import { Router } from "express";
import { defaultR } from "../../controllers/vitrina_productos/testing.controllers.js";
import {defaultR2} from "../../controllers/vista_detallada/testing.controllers.js"
const router = Router();
router.get("/", defaultR);
router.get("/vistaDetallada", defaultR2);

export default router;
