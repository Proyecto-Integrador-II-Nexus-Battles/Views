import axios from "axios";
import { HOST, PORT } from "../../config.js";

// Funcion de llamar a mis cartas de lista de deseos  //process.env.GATEWAY_URL para cambiar la IP añadido como variable
export const listaDeseos = async (req, res) => {
  const userId = 15;
  const url = HOST + ":" + PORT; // Utiliza la variable de entorno si está definida
  console.log(url);
  if (!url) {
    // Manejar el caso en que la variable de entorno no esté definida
    console.error("La variable de entorno GATEWAY_URL no está definida");
    return res.status(500).send("Error interno del servidor");
  }

  try {
    const deseosRespuesta = await axios.post(`${url}/deseos`, {
      user_id: userId,
    }); // Conexión con el backend
    if (deseosRespuesta.status >= 300) {
      console.error("La solicitud de lista de deseos no fue exitosa");
      return res
        .status(deseosRespuesta.status)
        .send(deseosRespuesta.data["status"]);
    }

    const listaDeseos = deseosRespuesta.data;

    for (let i = 0; i < listaDeseos.length; i++) {
      const cardId = listaDeseos[i]["producto_id"];
      const inventarioRespuesta = await axios.post(
        `${url}/inventario/getCard`,
        {
          cardID: cardId.toString(),
        }
      ); // Conexión con el backend
      if (inventarioRespuesta.status >= 300) {
        console.error("La solicitud de inventario no fue exitosa");
        return res
          .status(inventarioRespuesta.status)
          .send(inventarioRespuesta.data);
      }
      const infoCard = inventarioRespuesta.data;
      listaDeseos[i]["_id"] = infoCard["_id"];
      listaDeseos[i]["TypeCard"] = infoCard["TypeCard"];
      listaDeseos[i]["imagePath"] = infoCard["imagePath"];
      listaDeseos[i]["imgType"] = infoCard["imgType"];
      listaDeseos[i]["Name"] = infoCard["Name"];
      listaDeseos[i]["poder"] = infoCard["poder"];
      listaDeseos[i]["vida"] = infoCard["vida"];
      listaDeseos[i]["defensa"] = infoCard["defensa"];
      listaDeseos[i]["ataque"] = infoCard["ataque"];
      listaDeseos[i]["Type"] = infoCard["Type"];
      listaDeseos[i]["Subtype"] = infoCard["Subtype"];
      listaDeseos[i]["defenseBuff"] = infoCard["defenseBuff"];
      listaDeseos[i]["price"] = infoCard["price"];

      const vitrinaRespuesta = await axios.post(`${url}/vitrina/prices`, {
        id_cartas: [cardId],
      });
      if (vitrinaRespuesta.status >= 300) {
        console.error("La solicitud de inventario no fue exitosa");
        return res.status(vitrinaRespuesta.status).send(vitrinaRespuesta.data);
      }
      const priceCard = vitrinaRespuesta.data[0];
      listaDeseos[i]["precio"] = priceCard["precio"];
      listaDeseos[i]["divisa"] = priceCard["divisa"];
      listaDeseos[i]["descuento"] = priceCard["descuento"];
      listaDeseos[i]["id_carta"] = priceCard["id_carta"];
    }

    console.log(listaDeseos);

    // La respuesta fue exitosa, renderizar la vista con los datos obtenidos
    res.render("lista_deseos/index.ejs", {
      title: "Lista de Deseos",
      user: { id: userId },
      products: listaDeseos,
    });
    console.log(listaDeseos); //user: req.session.user, products: rows sesion de usuarios
  } catch (error) {
    console.error("Error al obtener la lista de deseos:", error);
    // Capturar cualquier error que ocurra durante la solicitud
    res.status(500).send("Error interno del servidor");
  }
};

export const moverCartaCarro = async (req, res) => {
  const url = `${HOST}:${PORT}/carro/ADD-CARD`;
  const { IdCard, Cantidad } = req.body;
  const data = {
    IdCard: IdCard,
    Cantidad: Cantidad,
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

export const eliminarItemDeseos = async (req, res) => {
  const url = `${HOST}:${PORT}/deseos/eliminar/${req.params.id}`;
  fetch(url, {
    method: "POST",
    headers: { Authorization: req.headers.authorization },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 301) {
        res.status(301).send("No autorizado");
      }
      throw new Error("Error en la solicitud POST");
    })
    .then((data) => {
      console.log("Respuesta del servidor: ", data);
      res.status(200).send("Se eliminó correctamente");
    })
    .catch((error) => {
      console.error("Error en la solicutud: ", error);
      res.status(500).send("No se pudo eliminar correctamente");
    });
};
