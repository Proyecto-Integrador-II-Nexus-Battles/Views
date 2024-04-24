import {
  userLogging,
  renderLogin,
  renderRegister,
  rendervitrina,
  irrvitrina,
  admin,
} from "../../controllers/manejo_usuarios/controller.js";
import {
  renderAdmin,
  fetchLogin,
  buscarUsername,
  renderUser,
  fetchRegister,
} from "../../controllers/manejo_usuarios/controller.js";
import { Router } from "express";
import {
  fetchNewPassword,
  fetchRecuperarContrasena,
  renderConfirmarCuenta,
  renderNuevaContrasena,
  renderRecuperarContrasena,
  renderVerificarCuenta,
  verifyCode,
} from "../../controllers/manejo_usuarios/emailController.js";

const router = new Router();

router.get("/login", renderLogin);
router.post("/logging", userLogging);
router.get("/register", renderRegister);
router.get("/vitrina", rendervitrina);
router.get("/adminpage", renderAdmin);
router.get("/buscar_user", buscarUsername);
router.post("/usuario/login", fetchLogin);
router.post("/usuario/register", fetchRegister);
router.get("/user/:username", renderUser);
router.post("/usuario/recover/send", fetchRecuperarContrasena);
router.get("/usuario/recover", renderRecuperarContrasena);
router.get("/usuario/recover/new", renderNuevaContrasena);
router.patch("/usuario/recover/new", fetchNewPassword);
router.post("/usuario/verify", verifyCode);
router.get("/usuario/mail/verify", renderVerificarCuenta);
router.get("/usuario/confirmar", renderConfirmarCuenta);

export default router;
