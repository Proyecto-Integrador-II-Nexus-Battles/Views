import { cartasSubasta } from "../../controllers/subasta/testing.controller.js";
import { Router } from "express";

const router = new Router();

router.get("/vitrina-subasta", cartasSubasta);



export default router;