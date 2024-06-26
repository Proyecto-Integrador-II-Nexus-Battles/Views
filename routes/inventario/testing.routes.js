import { Router } from "express";
import {
  defaultR,
  defaultR2,
  defaultR4,
  rendermiCuenta,
  fetchNewData,
  defaultR3,
  defaultR6,
  defaultR7,
  defaultR8,
  defaultR9,
  default10,
  default11,
  default12,
  prueba,
} from "../../controllers/inventario/testing.controllers.js";

const router = Router();
router.get("/inventario", defaultR);
router.get("/creacionCarta", defaultR2);
router.get("/modificacionCarta/:id", defaultR3);
router.get("/descripcion", defaultR4);
router.get("/miCuenta", rendermiCuenta);
router.post("/usuario/newData", fetchNewData);
router.get("/modificacionCartaDescripcion", defaultR6);
router.get("/jugarOnline", defaultR7);
router.get("/creacion_carta_items", defaultR8);
router.get("/torneo", defaultR9);
router.get("/subasta", default10);
router.get("/subasta/detallada", prueba);
router.get("/subasta/venta_carta", default11);
router.post("/inventario/modifyCard", default12);

export default router;
