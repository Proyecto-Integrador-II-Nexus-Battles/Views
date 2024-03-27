import { userLogging, renderLogin, renderRegister, rendervitrina, irrvitrina, admin } from "../../controllers/manejo_usuarios/controller.js";
import { Router } from "express";

const router = new Router();

router.get("/login", renderLogin);
router.post("/logging", userLogging);
router.get("/register", renderRegister);
router.get("/vitrina", rendervitrina)
router.get("/admin", admin)


export default router;