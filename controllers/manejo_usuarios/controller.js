import fetch from "node-fetch";
import { HOST, PORT } from "../../config.js";

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
      `http://${HOST}:${PORT}/usuario/buscar_usuario?q=${query}`
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
    const response = await fetch(`http://${HOST}:${PORT}/usuario/${username}`);
    const text = await response.text();
    const userInfo = text ? JSON.parse(text) : null;
    return userInfo;
  } catch (error) {
    console.error("Error al obtener información de usuario:", error);
    throw error;
  }
}
