import axios from "axios";
import { PORT, HOST } from "../../config.js";
import fetch from "node-fetch";

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

export const admin = (req, res) => {
  res.render("manejo_usuarios/admin_main_page.ejs");
};

export const rendervitrina = (req, res) => {
  res.render("manejo_usuarios/vitrina.ejs");
};

export const irrvitrina = (req, res) => {
  res.redirect("manejo_usuarios/vitrina.ejs");
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
    avataroculto: req.body.avataroculto,
  });
};

export const renderAdmin = async (req, res) => {
  try {
    const data = await fetch(`${HOST}:${PORT}/usuario/admin`);
    const users = await data.json();
    res.render("manejo_usuarios/admin_main_page", { users });
  } catch (error) {
    console.error("Error al obtener datos de usuarios:", error);
    res.status(500).send("Error al obtener datos de usuarios");
  }
};

export const buscarUsername = async (req, res) => {
  try {
    const query = req.query.q;
    const response = await fetch(
      `${HOST}:${PORT}/usuario/buscar_usuario?q=${query}`
    );
    const resultados = await response.json();
    res.json(resultados);
  } catch (error) {
    console.error("Error al buscar usuario:", error);
    res.status(500).send("Error al buscar usuario");
  }
};

export const renderUser = async (req, res) => {
  try {
    const username = req.params.username;
    const userInfo = await fetchUserInfo(username);
    if (!userInfo || Object.keys(userInfo).length === 0) {
      throw new Error("Respuesta no válida o vacía");
    }
    res.render("manejo_usuarios/user_review", { userInfo });
  } catch (error) {
    console.error("Error al renderizar usuario:", error);
    res.status(500).send("Error al renderizar usuario");
  }
};

async function fetchUserInfo(username) {
  try {
    const response = await fetch(`${HOST}:${PORT}/usuario/user/${username}`);
    const text = await response.text();
    const userInfo = text ? JSON.parse(text) : null;
    return userInfo;
  } catch (error) {
    console.error("Error al obtener información de usuario:", error);
    throw error;
  }
}

export const fetchLogin = async (req, res) => {
  fetch(`${HOST}:${PORT}/usuario/logIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST",
    },
    body: JSON.stringify(req.body),
  })
    .then((response) => {
      response.json().then((data) => {
        res.json(data);
      });
    })
    .catch((error) => {
      console.log("Error" + error);
    });
};

export const fetchRegister = async (req, res) => {
  fetch(`${HOST}:${PORT}/usuario/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      enctype: "multipart/form-data",
      "Access-Control-Allow-Methods": "POST",
    },
    body: JSON.stringify(req.body),
  })
    .then((response) => {
      response.json().then((data) => {
        res.json(data);
      });
    })
    .catch((error) => {
      console.log("Error" + error);
    });
};
