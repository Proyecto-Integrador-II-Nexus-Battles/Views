import { cartasSubasta, filtrarCartasSubasta } from "../../controllers/subasta/testing.controller.js";
import { Router } from "express";

const router = new Router();

router.get("/vitrina-subasta", cartasSubasta);
router.get("/filteredCardsSubasta/", filtrarCartasSubasta);


export default router;