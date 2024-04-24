import { Router } from "express";
import {
  defaultR,
  addCantidad,
  deleteCard,
  createOrder,
  resumenFlotante,
  actualizarCant
} from "../../controllers/carro_compras/testing.controllers.js";

const router = Router();
router.get("/carro/carroCompras", defaultR);
router.post("/carro/changeCant", addCantidad);
router.post("/carro/deleteCard", deleteCard);
router.post("/portal/createOrder", createOrder);
router.get("/carro/resumenFlotante", resumenFlotante);
router.post("/carro/actualizarCant", actualizarCant);

export default router;
