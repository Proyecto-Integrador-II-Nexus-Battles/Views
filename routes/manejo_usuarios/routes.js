import {renderAdmin, buscarUsername,renderUser } from "../../controllers/manejo_usuarios/controller.js";
import { Router } from "express";

const router = new Router();

router.get("/adminpage", renderAdmin);
router.get('/buscar_user', buscarUsername);
router.get("/:username", renderUser);

export default router;