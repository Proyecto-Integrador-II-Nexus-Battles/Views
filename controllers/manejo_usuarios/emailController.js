import axios from "axios";
import { HOST, PORT } from "../../config.js";
import e from "express";

export const renderConfirmarCuenta = async (req, res) => {
  res.render("manejo_usuarios/cuentaCreadaConfirmada");
};

export const renderVerificarCuenta = async (req, res) => {
  res.render("manejo_usuarios/verificarCuenta");
};

export const renderRecuperarContrasena = async (req, res) => {
  res.render("manejo_usuarios/recuperarContrasena");
};

export const renderNuevaContrasena = async (req, res) => {
  res.render("manejo_usuarios/nuevaContrasena");
};

export const fetchRecuperarContrasena = async (req, res) => {
  const { a, b, c, email } = req.body;
  console.log(a, b, c, email);
  axios
    .post(`${HOST}:${PORT}/usuario/check/questions`, {
      a: a,
      b: b,
      c: c,
      email: email,
    })
    .then((response) => {
      if (response.status === 200) {
        return res.status(200).send(response.data);
      }
      if (response.status === 401) {
        return res.status(401).send(response.data);
      }
      if (response.status === 420) {
        return res.status(420).send(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send("Error interno del servidor");
    });
};

export const fetchNewPassword = async (req, res) => {
  const { email, password, code } = req.body;
  axios
    .post(`${HOST}:${PORT}/usuario/code/password`, {
      email: email,
      password: password,
      code: code,
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.message === "Password was changed") {
        return res.status(200).send(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send("Error interno del servidor");
    });
};

export const verifyCode = async (req, res) => {
  const { email, code } = req.body;
  axios
    .post(`${HOST}:${PORT}/usuario/code/verify`, {
      email: email,
      code: code,
    })
    .then((response) => {
      if (response.data.message === "Code is valid") {
        return res.status(200).send(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send("Error interno del servidor");
    });
};
