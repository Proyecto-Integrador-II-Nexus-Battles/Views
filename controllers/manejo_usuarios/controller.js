import axios from "axios";
import { PORT, HOST } from "../../config.js";

export const renderLogin = (req, res) => {
  res.render("manejo_usuarios/login.ejs");
};

export const userLogging = async (req, res) => {
  const endpoint = "/usuario/logIn";
  axios
    .post(`${HOST}:${PORT}${endpoint}`, {
      email: req.body.email,
      password: req.body.password,
    })
    .then((response) => {});
};

export const renderRegister = (req, res) => {
  res.render("manejo_usuarios/register.ejs");
};

export const register = async (req, res) => {
  const endpoint = "/usuario/registro";
  axios.post(`${HOST}:${PORT}${endpoint}`, {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    username: req.body.username,
    email: req.body.email,
    metodospago: req.body.metodospago,
    numero_tarjeta: req.body.numero_tarjeta,
    cvv: req.body.cvv,
    fecha_exp: req.body.fecha_exp,
    pregunta_1: req.body.pregunta_1,
    pregunta_2: req.body.pregunta_2,
    pregunta_3: req.body.pregunta_3,
  });
};
