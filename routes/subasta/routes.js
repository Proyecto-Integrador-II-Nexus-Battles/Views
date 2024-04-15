import { cartasSubasta } from "../../controllers/subasta/testing.controller.js";
import { Router } from "express";

const router = new Router();

router.get("/vitrinaSubasta", cartasSubasta);

export default router;