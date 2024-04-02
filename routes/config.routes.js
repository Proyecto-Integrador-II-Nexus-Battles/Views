import { receiveVariables } from "../controllers/config.controller.js";
import { Router } from "express";

const router = new Router();

router.get("/variables", receiveVariables);

export default router;