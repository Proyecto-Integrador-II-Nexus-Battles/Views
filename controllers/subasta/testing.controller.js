import { HOST, PORT } from "../../config.js";
import axios from "axios";

export const cartasSubasta = async (_req, res) => {
  try {
    const options = {
      headers: {
        Authorization: `${_req.query.token}`,
      },
    };

    const response = await fetch(
      `${HOST}:${PORT}/subasta/get-cartas-subasta`,
      options
    );

    if (response.status === 401) {
      return res.redirect("/login");
    }

    const date = await response.json();
    const idCartas = date.map((carta) => carta.ID_CARTA);
    const conexionInventario = await fetch(
      `${HOST}:${PORT}/inventario/getCardsByIDs`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${_req.query.token}`,
        },
        body: JSON.stringify({ IDs: idCartas }),
      }
    );

    const datos = await conexionInventario.json();
    datos.forEach((carta, index) => {
      carta.ID_SUBASTA = date[index].ID;
    });

    res.render("subasta/subasta_vitrina", { datos });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const filtrarCartasSubasta = async (req, res) => {
  try {
    const options = {
      headers: {
        Authorization: `${req.query.token}`,
      },
    };

    const query = req.query;
    const params = new URLSearchParams(query).toString();
    const response = await fetch(
      `${HOST}:${PORT}/subasta/get-cartas-subasta?${params}`,
      options
    );

    if (response.status === 401) {
      return res.redirect("/login");
    }

    const date = await response.json();
    const idCartas = date.map((carta) => carta.ID_CARTA);
    const conexionInventario = await fetch(
      `${HOST}:${PORT}/inventario/getCardsByIDs`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${req.query.token}`,
        },
        body: JSON.stringify({ IDs: idCartas }),
      }
    );

    if (conexionInventario.status === 401) {
      return res.redirect("/login");
    }

    const datos = await conexionInventario.json();
    datos.forEach((carta, index) => {
      carta.ID_SUBASTA = date[index].ID;
    });

    res.render("subasta/subasta_vitrina", { datos });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const subastaDetallada = async (_req, res) => {
  try {
    const id = _req.params.id;

    const options = {
      headers: {
        Authorization: `${_req.query.token}`,
      },
    };

    const response = await fetch(
      `${HOST}:${PORT}/subasta/getSubasta/` + id,
      options
    );

    if (response.status === 401) {
      return res.redirect("/login");
    }

    const date = await response.json();
    const idCartas = date.map((carta) => carta.ID_CARTA);
    const conexionInventario = await fetch(
      `${HOST}:${PORT}/inventario/getCardsByIDs`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${_req.query.token}`,
        },
        body: JSON.stringify({ IDs: idCartas }),
      }
    );
    if (conexionInventario.status === 401) {
      return res.redirect("/login");
    }

    const datos = await conexionInventario.json();
    datos.forEach((carta, index) => {
      carta.ID_SUBASTA = datos[index].ID;
      Object.assign(carta, date[index]);
    });

    res.render("subasta/subasta", { datos });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const valor_carta = async (req, res) => {
  try {
    const response = await fetch(`${HOST}:${PORT}/inventario/getBankCards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${req.query.token}`,
      },
    });
    const bancoJSON = await response.json();
    const dataResponse = await fetch(`${HOST}:${PORT}/inventario/getAllCards`);
    const inventarioJSON = await dataResponse.json();
    res.render("subasta/valor_carta.ejs", {
      banco: bancoJSON,
      datos: null,
      inventario: inventarioJSON,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const crearSubasta = async (req, res) => {
  try {
    const response = await fetch(`${HOST}:${PORT}/subasta/add-subastar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${req.query.token}`,
      },
      body: JSON.stringify(req.body),
    });
    const respuestaJson = await response.json();
    res.status(200).send(respuestaJson);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const getCreditos = async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: req.headers.authorization,
    },
  };
  try {
    const response = await fetch(
      `${HOST}:${PORT}/inventario/get-creditos`,
      options
    );
    const respuestaJson = await response.json();
    if (response.ok) {
      res.status(200).send(respuestaJson);
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error(error);
    res.redirect("/login");
  }
};

export const compraRapida = async (req, res) => {
  try {
    const { ID_SUBASTA } = req.body;
    const options = {
      headers: {
        Authorization: req.headers.authorization,
      },
    };
    axios
      .post(
        `${HOST}:${PORT}/subasta/compraRapida`,
        { ID_SUBASTA: ID_SUBASTA },
        options
      )
      .then((response) => {
        if (response.status === 200) {
          res.status(200).send("Compra realizada con exito");
        } else if (response.status === 401) {
          res.redirect("/login");
        } else {
          res.status(500).send("Internal Server Error");
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Internal Server Error");
      });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
