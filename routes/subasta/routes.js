import {
  cartasSubasta,
  valor_carta,
  crearSubasta,
  fetchBuzon
} from "../../controllers/subasta/testing.controller.js";
import { Router } from "express";

const router = new Router();

router.get("/vitrina-subasta", cartasSubasta);
router.get("/valor_carta", valor_carta);
router.post("/crear-subasta", crearSubasta);
router.get("/subasta/buzon", fetchBuzon)

export default router;
