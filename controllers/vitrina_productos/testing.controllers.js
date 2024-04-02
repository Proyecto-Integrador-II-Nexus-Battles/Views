import { HOST, PORT } from "../../config.js";

export const defaultR = async (req, res) => {
  try {
    const response = await fetch(`${HOST}:${PORT}/inventario/getEcommerceCard`);
    const datos = await response.json();
    
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
    `${HOST}:${PORT}/inventario/getEcommerceCard/${encodedID}`
  );
  const datos = await response.json();
  res.render("vitrina_productos/vistadetallada", { datos });
};

export const defaultR3 = (req, res) => {
  res.render("user_review");
};

export const defaultR4 = async (req, res) => {
  try {
    const query = req.query;
    const params = new URLSearchParams(query).toString();
    const response = await fetch(`${HOST}:${PORT}/inventario/cards?${params}`);
    const datos = await response.json();



    res.render("vitrina_productos/index", { datos });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const defaultR5 = async (req, res) => {
  const url = `${HOST}:${PORT}/carro_compras/ADD-CARD`;
  const { IdCard } = req.body;
  const data = {
    IdCard: IdCard,
    Cantidad: 1,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: req.headers.authorization,
    },
    body: JSON.stringify(data),
  };
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 301) {
        res.status(301).send("No autorizado");
      }
      throw new Error("Error en la solicitud POST");
    })
    .catch((error) => {
      console.error("Error en la solicutud: ", error);
    });
};

export const defaultR6 = async (req, res) => {
  console.log("entro a defaultR6");
  const url = `${HOST}:${PORT}/deseos/agregar`;
  const { IdCard } = req.body;
  const data = {
    IdCard: IdCard,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: req.headers.authorization,
    },
    body: JSON.stringify(data),
  };
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 301) {
        res.status(301).send("No autorizado");
      }
      throw new Error("Error en la solicitud POST");
    })
    .catch((error) => {
      console.error("Error en la solicutud: ", error);
    });
};

export const defaultR7 = async (req, res) => {
  const url = `${HOST}:${PORT}/deseos/eliminar`;
  const { IdCard } = req.body;
  const data = {
    IdCard: IdCard,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: req.headers.authorization,
    },
    body: JSON.stringify(data),
  };
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 301) {
        res.status(301).send("No autorizado");
      }
      throw new Error("Error en la solicitud POST");
    })
    .catch((error) => {
      console.error("Error en la solicutud: ", error);
    });
};
