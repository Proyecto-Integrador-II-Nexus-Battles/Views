import { cartasSubasta, filtrarCartasSubasta, subastaDetallada } from "../../controllers/subasta/testing.controller.js";
import { Router } from "express";

const router = new Router();

router.get("/vitrina-subasta", cartasSubasta);
router.get("/subastaDetallada", subastaDetallada);
router.get("/filteredCardsSubasta/", filtrarCartasSubasta);


export default router;