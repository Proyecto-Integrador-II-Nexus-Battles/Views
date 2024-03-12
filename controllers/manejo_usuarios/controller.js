import fetch from 'node-fetch';

export const renderAdmin = async (req, res) => {
  const data = await fetch('http://localhost:3000/usuario/admin')
  const users = await data.json()
  res.render("manejo_usuarios/admin_main_page", { users });
}

export const buscarUsername = async (req, res) => {
  const query = req.query.q;
  const response = await fetch(`http://localhost:3000/usuario/buscar_usuario?q=${query}`);
  const resultados = await response.json();
  res.json(resultados);
};

export const renderUser = async (req, res) => {
  const username = req.params.username;
  const userInfo = await fetchUserInfo(username);
  res.render("manejo_usuarios/user_review", { userInfo })
};

async function fetchUserInfo(username) {
    const response = await fetch(`http://localhost:3000/usuario/${username}`);
    const userInfo = await response.json();
    return userInfo;

}


