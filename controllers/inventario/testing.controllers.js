import { HOST, PORT } from "../../config.js";

export const defaultR = async (req, res) => {
  const dataResponse = await fetch(`${HOST}:${PORT}/inventario/getAllCards`);
  const datos = await dataResponse.json();
  res.render("inventario/index", { datos });
};

export const defaultR2 = (req, res) => {
  res.render("inventario/creacion_carta");
};

export const defaultR4 = (req, res) => {
  res.render("inventario/descripcion");
};

export const rendermiCuenta = async (req, res) => {
  try {
    console.log("1")
    console.log(req.query);
    const data = await fetch('https://localhost:3000/usuario/cuenta',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': `${req.query.token}`,
      },
      body: JSON.stringify({ "IdUsuario": 21 })
    });
    const userinfo = await data.json();
  
    const avatarText = Buffer.from(userinfo.avatar.data).toString('utf-8');

    res.render("inventario/miCuenta", { userinfo, avatarText });
  } catch (error) {
    console.error("Error al obtener datos del usuario:", error);
    res.status(500).send("Error al obtener datos del usuario");
  }
};

export const defaultR3 = (req, res) => {
  res.render("inventario/modificacioncarta");
};
export const defaultR6 = (req, res) => {
  res.render("inventario/modificacioncartadescripcion");
};
export const defaultR7 = (req, res) => {
  res.render("inventario/jugaronline");
};
export const defaultR8 = (req, res) => {
  res.render("inventario/creacion_carta_items");
};
export const defaultR9 = (req, res) => {
  res.render("inventario/torneo");
};
export const default10 = (req, res) => {
  res.render("inventario/subasta");
};
