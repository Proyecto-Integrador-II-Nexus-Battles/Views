import { userLogging, renderLogin, renderRegister, rendervitrina, irrvitrina, admin } from "../../controllers/manejo_usuarios/controller.js";
import { renderAdmin, fetchLogin, buscarUsername, renderUser, fetchRegister } from "../../controllers/manejo_usuarios/controller.js";
import { Router } from "express";

const router = new Router();

router.get("/login", renderLogin);
router.post("/logging", userLogging);
router.get("/register", renderRegister);
router.get("/vitrina", rendervitrina);
router.get("/adminpage", renderAdmin);
router.get('/buscar_user', buscarUsername);
router.post("/usuario/login", fetchLogin);
router.post("/usuario/register", fetchRegister);
router.get("/user/:username", renderUser);

export default router;