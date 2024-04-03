import { HOST, PORT } from "../../config.js";
import axios from "axios";

export const defaultR = async (req, res) => {
  try {
    const response = await fetch(`${HOST}:${PORT}/inventario/getEcommerceCard`);
    const datos = await response.json();
    const options = {
      headers: { Authorization: `${req.query.token}` },
    };
    axios
      .post(`${HOST}:${PORT}/carro/INFO-CARDS`, {}, options)
      .then(async (response) => {
        const responseData = response.data;

        const info = responseData.Info;
        const totales = responseData.totales;
        const totalNeto = responseData.totalNeto;
        const totalBruto = responseData.totalBruto;
        const cantidad = responseData.list_price_unit;
        const cantidadtotal = cantidad.reduce(
          (total, item) => total + item.CANTIDAD,
          0
        );

        console.log(cantidadtotal);
        // Renderiza la vista con los datos obtenidos
        res.render("carro_compras/index", {
          info: info,
          totales: totales,
          totalNeto: totalNeto,
          totalBruto: totalBruto,
          cantidad: cantidad,
          cantidadtotal: cantidadtotal,
        });
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
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
  console.log("hola");
  console.log(HOST);
  console.log(PORT);

  const url = `${HOST}:${PORT}/carro/ADD-CARD`;
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
  console.log("1");
  fetch(url, options)
    .then((response) => {
      console.log("3");
      if (response.ok) {
        console.log("4");
        return response.json();
      }
      if (response.status === 301) {
        res.status(301).send("No autorizado");
        console.log("5");
      }
      console.log(response);
      /*
      throw new Error("Error en la solicitud POST ");
      */
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
      throw new Error("Error en la solicitud POST hola");
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
