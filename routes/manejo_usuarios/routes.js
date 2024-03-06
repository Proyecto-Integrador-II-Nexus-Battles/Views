import { userLogging, renderLogin, renderRegister } from "../../controllers/manejo_usuarios/controller.js";
import { Router } from "express";

const router = new Router();

router.get("/login", renderLogin);
router.post("/logging", userLogging);
router.get("/register", renderRegister);


export default router;