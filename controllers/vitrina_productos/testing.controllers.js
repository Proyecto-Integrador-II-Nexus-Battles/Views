import { log } from "console";
import path from "path";
import { fileURLToPath } from "url";

export const defaultR = async (req, res) => {
  try {
    const response = await fetch(
      `${process.env.I_HOST}:${process.env.I_PORT}/inventario/getEcommerceCard`
    );
    const datos = await response.json();
    datos.forEach((dato) => {
      dato.imagePath = "vitrina_productos/img/cedric.jpg";
    });
    res.render("vitrina_productos/index", { datos });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const defaultR2 = async (req, res) => {
  const { id } = req.params;
  const encodedID = encodeURIComponent(id);
  const response = await fetch(
    `${process.env.I_HOST}:${process.env.I_PORT}/inventario/getEcommerceCard/${encodedID}`
  );
  const datos = await response.json();
  datos.forEach((dato) => {
    dato.imagePath = "vitrina_productos/img/cedric.jpg";
  });
  res.render("vitrina_productos/vistadetallada", { datos });
};

export const defaultR3 = (req, res) => {
  res.render("user_review");
};

export const defaultR4 = async (req, res) => {
  try {
    const query = req.query;
    const params = new URLSearchParams(query).toString();
    const response = await fetch(
      `${process.env.I_HOST}:${process.env.I_PORT}/inventario/cards?${params}`
    );
    const datos = await response.json();

    datos.forEach((dato) => {
      dato.imagePath = "vitrina_productos/img/cedric.jpg";
    });

    res.render("vitrina_productos/index", { datos });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const addCart = async (req, res) => {
  const { id } = req.body;
  const response = await fetch(
    `${process.env.I_HOST}:${process.env.I_PORT}/carro/ADD-CARD`,
    {
      method: "POST",
      headers: {
        Authorization: req.headers.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ IdCard: id, Cantidad: 1 }),
    }
  );
  const datos = await response.json();
  res.json(datos);
};

export const addDeseos = async (req, res) => {
  const { id } = req.body;
  const response = await fetch(
    `${process.env.I_HOST}:${process.env.I_PORT}/nosequeendpointva(es de deseos)`,
    {
      method: "POST",
      headers: {
        Authorization: req.headers.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ IdCard: id, Cantidad: 1 }),
    }
  );
  const datos = await response.json();
  res.json(datos);
};
