import fetch from 'node-fetch';

export const renderAdmin = async (req, res) => {
  try {
    const data = await fetch('http://localhost:3000/usuario/admin');
    const users = await data.json();
    res.render("manejo_usuarios/admin_main_page", { users });
  } catch (error) {
    console.error("Error en renderAdmin:", error);
    res.status(500).send("Error interno del servidor");
  }
};

export const buscarUsername = async (req, res) => {
  try {
    const query = req.query.q;
    const response = await fetch(`http://localhost:3000/usuario/buscar_usuario?q=${query}`);
    const resultados = await response.json();
    res.json(resultados);
  } catch (error) {
    console.error("Error en buscarUsername:", error);
    res.status(500).send("Error interno del servidor");
  }
};

export const renderUser = async (req, res) => {
  try {
    const username = req.params.username;
    const userInfo = await fetchUserInfo(username);
    res.render("manejo_usuarios/user_review", { userInfo });
  } catch (error) {
    console.error("Error en renderUser:", error);
    res.status(500).send("Error interno del servidor");
  }
};

async function fetchUserInfo(username) {
  try {
    const response = await fetch(`http://localhost:3000/usuario/${username}`);
    const userInfo = await response.json();
    return userInfo;
  } catch (error) {
    console.error("Error en fetchUserInfo:", error);
    throw error;
  }
}
