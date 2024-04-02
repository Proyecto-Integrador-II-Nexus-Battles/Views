import { log } from "console";
import path from "path";
import { fileURLToPath } from "url";

export const defaultR = async (req, res) => {
  try {
    const response = await fetch(`${process.env.I_HOST}:${process.env.I_PORT}/inventario/getEcommerceCard`);
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
  const response = await fetch(`${process.env.I_HOST}:${process.env.I_PORT}/inventario/getEcommerceCard/${encodedID}`);
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
    const response = await fetch(`${process.env.I_HOST}:${process.env.I_PORT}/inventario/cards?${params}`);
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

export const defaultR5 = async (req, res) => {
  const url = `${process.env.HOST_C}:${process.env.PORT_C}/carro_compras/ADD-CARD`;
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
}

export const defaultR6 = async (req, res) => {
  const url = `${process.env.HOST_L}:${process.env.PORT_L}/deseos/agregar`;
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
}

export const defaultR7 = async (req, res) => {
  const url = `${process.env.HOST_L}:${process.env.PORT_L}/deseos/eliminar`;
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
}