import {
  cartasSubasta,
  filtrarCartasSubasta,
  subastaDetallada,
  valor_carta,
  crearSubasta,
  getCreditos,
  compraRapida
} from "../../controllers/subasta/testing.controller.js";

import { Router } from "express";

const router = new Router();

router.get("/vitrina-subasta", cartasSubasta);
router.get("/valor_carta", valor_carta);
router.post("/crear-subasta", crearSubasta);
router.get("/subastaDetallada/:id", subastaDetallada);
router.get("/filteredCardsSubasta/", filtrarCartasSubasta);
router.get("/getCreditos", getCreditos);
router.post("/subasta/compraRapida", compraRapida);

export default router;