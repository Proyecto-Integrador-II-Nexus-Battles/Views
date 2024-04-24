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
        Authorization: `${req.headers.authorization}`,
      },
      body: JSON.stringify(req.body),
    });
    if (response.status === 401) {
      return res.json({ error: "Unauthorized" });
    }
    if (response.status === 200) {
      return res.json({ message: "Subasta creada exitosamente" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const fetchBuzon = async (req, res) => {
  try {
    const token = req.query.token;
    const response = await fetch(`${HOST}:${PORT}/subasta/buzon`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    if (response.status === 401) {
      return res.redirect("/");
    }
    const datos = await response.json();
    console.log(datos);
    res.render("subasta/buzon", { datos, token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const fetchClaim = async (req, res) => {


    try {

        console.log(req.body)

        const token = req.headers.authorization
        console.log(token)

        const response = await fetch(`${HOST}:${PORT}/subasta/buzon/claim`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST",
                "Authorization": `${token}`
            },
            body: JSON.stringify(req.body),
        })
        const respuestaJson = await response.json();
        console.log(respuestaJson)
        res.status(200).send(respuestaJson);

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }



    /*  .then((response) => {
         console.log(response)
         response.json().then((data) => {
             res.json(data);
         });
     })
     .catch((error) => {
         console.log("Error" + error);
     }); */
};

export const fetchAdd = async (_req, res) => {
  try {
    const response = await fetch(`${HOST}:${PORT}/subasta/buzon/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const datos = await response.json();
    console.log(datos);
    return datos;
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
