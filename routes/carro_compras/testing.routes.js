import { Router } from "express";
import {
  defaultR,
  addCantidad,
  deleteCard,
  createOrder,
} from "../../controllers/carro_compras/testing.controllers.js";

const router = Router();
router.post("/carro/carroCompras", defaultR);
router.post("/carro/changeCant", addCantidad);
router.post("/carro/deleteCard", deleteCard);
router.post("/portal/createOrder", createOrder);

export default router;
