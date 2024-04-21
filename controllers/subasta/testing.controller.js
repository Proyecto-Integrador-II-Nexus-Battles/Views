import { HOST, PORT } from "../../config.js";

export const cartasSubasta = async (_req, res) => {
    try {
        console.log(_req.query.token);
        const options = {
            headers: {
                'Authorization': `${_req.query.token}`,
            },
        };

        const response = await fetch(`${HOST}:${PORT}/subasta/get-cartas-subasta`, options);
        const date = await response.json();
        const idCartas = date.map((carta) => carta.ID_CARTA);
        const conexionInventario = await fetch(`${HOST}:${PORT}/inventario/getCardsByIDs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${_req.query.token}`,
            },
            body: JSON.stringify({ IDs: idCartas }),
        })

        const datos = await conexionInventario.json();
        datos.forEach((carta, index) => {
            carta.ID_SUBASTA = date[index].ID;
        });

        console.log(datos);

        res.render("subasta/subasta_vitrina", { datos });

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");

    }
}

export const filtrarCartasSubasta = async (req, res) => {
    try {

        const options = {
            headers: {
                'Authorization': `${req.query.token}`,
            },
        };

        const query = req.query;
        const params = new URLSearchParams(query).toString();
        const response = await fetch(`${HOST}:${PORT}/subasta/get-cartas-subasta?${params}`, options);
        const date = await response.json();
        const idCartas = date.map((carta) => carta.ID_CARTA);
        const conexionInventario = await fetch(`${HOST}:${PORT}/inventario/getCardsByIDs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${req.query.token}`,
            },
            body: JSON.stringify({ IDs: idCartas }),
        })

        const datos = await conexionInventario.json();
        console.log(datos);
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
        console.log(id);

        const options = {
            headers: {
                'Authorization': `${_req.query.token}`,
            },
        };

        const response = await fetch(`${HOST}:${PORT}/subasta/getSubasta/` + id, options);
        const date = await response.json();
        const idCartas = date.map((carta) => carta.ID_CARTA);
        const conexionInventario = await fetch(`${HOST}:${PORT}/inventario/getCardsByIDs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${_req.query.token}`,
            },
            body: JSON.stringify({ IDs: idCartas }),
        })

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
}

export const valor_carta = async (req, res) => {
  try {
    console.log(req.query);
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
    console.log(inventarioJSON);
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
    console.log(req.query);

    const response = await fetch(`${HOST}:${PORT}/subasta/add-subastar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${req.query.token}`,
      },
      body: JSON.stringify(req.body)
    });
    const respuestaJson = await response.json();
    res.status(200).send(respuestaJson);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};