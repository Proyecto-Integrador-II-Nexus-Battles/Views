import { Router } from "express";
import {
  defaultR,
  defaultR2,
  defaultR4,
  addCart,
} from "../../controllers/vitrina_productos/testing.controllers.js";

const router = Router();
router.get("/", defaultR);
router.get("/vistaDetallada/:id", defaultR2);
router.get("/filteredCards/", defaultR4);
router.post("/vitrina/addCart", addCart);
router.post("/vitrina/addDeseos", addDeseos);

export default router;
