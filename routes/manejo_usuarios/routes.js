import { userLogging, renderLogin, renderRegister, rendervitrina, irrvitrina, admin } from "../../controllers/manejo_usuarios/controller.js";
import {renderAdmin, buscarUsername,renderUser } from "../../controllers/manejo_usuarios/controller.js";
import { Router } from "express";

const router = new Router();

router.get("/login", renderLogin);
router.post("/logging", userLogging);
router.get("/register", renderRegister);
router.get("/vitrina", rendervitrina);
router.get("/adminpage", renderAdmin);
router.get('/buscar_user', buscarUsername);
router.get("/user/:username", renderUser);

export default router;