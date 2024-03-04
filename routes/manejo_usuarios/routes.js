import { userLogging, renderLogin } from "../../../Manejo_Usuarios_Nuevo/controllers/controller.js";
import { Router } from "express";

const router = new Router();

router.get("/login", renderLogin);
router.post("/logging", userLogging);

export default router;