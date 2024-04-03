import axios from "axios";
import { HOST, PORT } from "../../config.js";

// Funcion de llamar a mis cartas de lista de deseos  //process.env.GATEWAY_URL para cambiar la IP añadido como variable
export const listaDeseos = async (req, res) => {
  const url = HOST + ":" + PORT; // Utiliza la variable de entorno si está definida
  console.log(url);
  if (!url) {
    // Manejar el caso en que la variable de entorno no esté definida
    console.error("La variable de entorno GATEWAY_URL no está definida");
    return res.status(500).send("Error interno del servidor");
  }

  const options = {
    headers: {
      Authorization: req.query.token,
    },
  };

  try {
    const deseosRespuesta = await axios.post(`${url}/deseos`, {}, options); // Conexión con el backend
    if (deseosRespuesta.status >= 300) {
      console.error("La solicitud de lista de deseos no fue exitosa");
      return res
        .status(deseosRespuesta.status)
        .send(deseosRespuesta.data["status"]);
    }

    const listaDeseos = deseosRespuesta.data;

    for (let i = 0; i < listaDeseos.length; i++) {
      const cardId = listaDeseos[i]["CARTAS_ID"];
      const inventarioRespuesta = await axios.post(
        `${url}/inventario/getCardsByIDs`,
        {
          IDs: [cardId],
        }
      ); // Conexión con el backend
      if (inventarioRespuesta.status >= 300) {
        console.error("La solicitud de inventario no fue exitosa");
        return res
          .status(inventarioRespuesta.status)
          .send(inventarioRespuesta.data);
      }
      const infoCard = inventarioRespuesta.data;
      listaDeseos[i]["_id"] = infoCard[0]["_id"];
      listaDeseos[i]["TypeCard"] = infoCard[0]["TypeCard"];
      listaDeseos[i]["imagePath"] = infoCard[0]["imagePath"];
      listaDeseos[i]["imgType"] = infoCard[0]["imgType"];
      listaDeseos[i]["Name"] = infoCard[0]["Name"];
      listaDeseos[i]["poder"] = infoCard[0]["Power"];
      listaDeseos[i]["vida"] = infoCard[0]["Live"];
      listaDeseos[i]["defensa"] = infoCard[0]["Defense"];
      listaDeseos[i]["ataque"] = infoCard[0]["AttackBase"];
      listaDeseos[i]["Type"] = infoCard[0]["Type"];
      listaDeseos[i]["Subtype"] = infoCard[0]["Subtype"];
      listaDeseos[i]["defenseBuff"] = infoCard[0]["DefenseBuff"];
      listaDeseos[i]["price"] = infoCard[0]["price"];

      const vitrinaRespuesta = await axios.post(
        `${url}/vitrina/prices`,
        [cardId],
        options
      );
      if (vitrinaRespuesta.status >= 300) {
        console.error("La solicitud de inventario no fue exitosa");
        return res.status(vitrinaRespuesta.status).send(vitrinaRespuesta.data);
      }
      const priceCard = vitrinaRespuesta.data[0];
      listaDeseos[i]["precio"] = priceCard["precio"];
      listaDeseos[i]["divisa"] = priceCard["divisa"];
      listaDeseos[i]["descuento"] = priceCard["descuento"];
      listaDeseos[i]["id"] = priceCard["id_carta"];
    }

    // La respuesta fue exitosa, renderizar la vista con los datos obtenidos
    res.render("lista_deseos/index.ejs", {
      title: "Lista de Deseos",
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
  axios
    .post(url, data, { headers: { Authorization: req.headers.authorization } })
    .then((response) => {
      if (response.status >= 300) {
        console.error("Error al mover la carta al carro");
        return res.status(response.status).send(response.data);
      }
      res.status(200).send("Se movió correctamente");
    })
    .catch((error) => {
      console.error("Error al mover la carta al carro:", error);
      res.status(500).send("Error interno del servidor");
    });
};

export const eliminarItemDeseos = async (req, res) => {
  const url = `${HOST}:${PORT}/deseos/eliminar`;
  const data = { IdCard: req.params.id };

  axios
    .post(url, data, {
      headers: { Authorization: req.headers.authorization },
    })
    .then((response) => {
      if (response.status >= 300) {
        console.error("Error al eliminar el item de la lista de deseos");
        return res.status(response.status).send(response.data);
      }
      res.status(200).send("Se eliminó correctamente");
    })
    .catch((error) => {
      console.error("Error al eliminar el item de la lista de deseos:", error);
      res.status(500).send("Error interno del servidor");
    });
};
