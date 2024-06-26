import {
  cartasSubasta,
  filtrarCartasSubasta,
  subastaDetallada,
  valor_carta,
  crearSubasta,
  fetchBuzon,
  fetchClaim,
  getCreditos,
  publishPuja,
  compraRapida,
} from "../../controllers/subasta/testing.controller.js";

import { Router } from "express";

const router = new Router();

router.get("/vitrina-subasta", cartasSubasta);
router.get("/valor_carta", valor_carta);
router.post("/crear-subasta", crearSubasta);
router.get("/subasta/buzon", fetchBuzon);
router.post("/subasta/buzon/claim", fetchClaim);
router.get("/subastaDetallada/:id", subastaDetallada);
router.get("/filteredCardsSubasta/", filtrarCartasSubasta);
router.get("/getCreditos", getCreditos);
router.post("/publishPuja", publishPuja);
router.post("/subasta/compraRapida", compraRapida);

export default router;
