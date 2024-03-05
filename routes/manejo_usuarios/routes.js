import { userLogging, renderLogin } from "../../controllers/manejo_usuarios/controller.js";
import { Router } from "express";

const router = new Router();

router.get("/login", renderLogin);
router.post("/logging", userLogging);

export default router;