import {
  cartasSubasta,
  filtrarCartasSubasta,
  subastaDetallada,
  valor_carta,
  crearSubasta
} from "../../controllers/subasta/testing.controller.js";

import { Router } from "express";

const router = new Router();

router.get("/vitrina-subasta", cartasSubasta);
router.get("/valor_carta", valor_carta);
router.post("/crear-subasta", crearSubasta);
router.get("/subastaDetallada", subastaDetallada);
router.get("/filteredCardsSubasta/", filtrarCartasSubasta);

export default router;