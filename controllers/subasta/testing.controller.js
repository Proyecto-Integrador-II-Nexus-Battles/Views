import { HOST, PORT } from "../../config.js";

export const cartasSubasta = async (_req, res) => {
  try {
    const response = await fetch(
      `https://localhost:${PORT}/subasta/get-cartas-subasta`
    );
    const date = await response.json();
    const idCartas = date.map((carta) => carta.ID_CARTA);
    console.log(idCartas);
    const conexionInventario = await fetch(
      `${HOST}:${PORT}/inventario/getCardsByIDs`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ IDs: idCartas }),
      }
    );

    const datos = await conexionInventario.json();
    console.log(datos);
    datos.forEach((carta, index) => {
      carta.ID_SUBASTA = datos[index].ID;
    });

    res.render("subasta/subasta_vitrina", { datos });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

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
    if (response.status === 401) {
      return res.redirect("/login");
    }
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
        Authorization: `${req.headers.authorization}`,
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
