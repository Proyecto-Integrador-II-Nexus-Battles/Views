import { HOST, PORT } from "../../config.js";
import axios from "axios";

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
    console.log("1");
    console.log(req.query);
    const data = await fetch(`${HOST}:${PORT}/usuario/cuenta`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${req.query.token}`,
      },
    });
    const userinfo = await data.json();

    if (userinfo.avatar == null) {
      res.render("inventario/micuenta", { userinfo, avatarText: "" });
      return;
    }
    const avatarText = Buffer.from(userinfo.avatar.data).toString("utf-8");

    res.render("inventario/micuenta", { userinfo, avatarText });
  } catch (error) {
    console.error("Error al obtener datos del usuario:", error);
    res.status(500).send("Error al obtener datos del usuario");
  }
};

export const fetchNewData = async (req, res) => {
  const newData = {
    new_username: req.body.new_username,
    new_password: req.body.new_password,
  };
  try {
    fetch(`${HOST}:${PORT}/usuario/newData`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${req.body.IdUsuario}`,
      },
      body: JSON.stringify(newData),
    });
  } catch (error) {
    console.error("Error al obtener datos del usuario:", error);
    res.status(500).send("Error al obtener datos del usuario");
  }
};

export const defaultR3 = async (req, res) => {
  try {
    console.log(req.params.id);
    const idCard = {
      IDs: req.params.id,
    };
    const response = await fetch(`${HOST}:${PORT}/inventario/getCardsByIDs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(idCard),
    });
    const datos = await response.json();
    res.render("inventario/modificacioncarta", { datos });
  } catch (err) {
    console.log("Error: " + err.message);
  }
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
  const options = {
    headers: {
      Authorization: req.query.token,
    },
  };
  axios
    .get(`${HOST}:${PORT}/inventario/get-creditos`, options)
    .then((response) => {
      if (response.status === 200) {
        let cantidad;
        if (!response.data) {
          cantidad = 0;
        } else {
          cantidad = response.data.CANTIDAD;
        }
        res.render("inventario/subasta", { credits: cantidad });
      } else {
        res.redirect("/login");
      }
    })
    .catch((error) => {
      console.error(error);
      res.redirect("/login");
    });
};

export const default11 = (req, res) => {
  res.render("inventario/subasta/venta_carta");
};

export const prueba = async (req, res) => {
  try {
    const response = await fetch(`${HOST}:${PORT}/inventario/getEcommerceCard`);
    const datos = await response.json();
    console.log(datos);
    res.render("subasta/subasta_vitrina", { datos });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const default12 =  (req, res) => {
  const  data =  req.body.data
  fetch(`${HOST}:${PORT}/inventario/modifyCard/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: data })
  });
};
