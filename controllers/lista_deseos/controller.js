//Este es un archivo de ejemplo de un controlador de Node.js. Reemplazar por otro archivo con un controlador real.
import axios from "axios";

// Funcion de llamar a mis cartas de lista de deseos  //process.env.WISH_URL para cambiar la IP añadido como variable
export const listaDeseos = async (req, res) => {
  const userId = 15;
  const url = process.env.WISH_URL; // Utiliza la variable de entorno si está definida
  if (!url) {
    // Manejar el caso en que la variable de entorno no esté definida
    console.error("La variable de entorno WISH_URL no está definida");
    return res.status(500).send("Error interno del servidor");
  }
  try {
    const deseosRespuesta = await axios.post(`${url}/lista_deseos`, { user_id: userId }); // Conexión con el backend
    if (deseosRespuesta.status >= 300) {
      console.error("La solicitud de lista de deseos no fue exitosa");
      return res.status(deseosRespuesta.status).send(deseosRespuesta.data["status"]);
    }

    const listaDeseos = deseosRespuesta.data;

    for (let i = 0; i < listaDeseos.length; i++ ) {
      const cardId = listaDeseos[i]['producto_id'];
      const inventarioRespuesta = await axios.post(`${url}/dummy/getCard`, { cardID: cardId.toString() }); // Conexión con el backend
      if (inventarioRespuesta.status >= 300) {
        console.error("La solicitud de inventario no fue exitosa");
        return res.status(inventarioRespuesta.status).send(inventarioRespuesta.data);
      }
      const infoCard = inventarioRespuesta.data;
      listaDeseos[i]['nombre'] = infoCard['nombre'];
      listaDeseos[i]['vida'] = infoCard['vida'];
      listaDeseos[i]['defensa'] = infoCard['defensa'];
      listaDeseos[i]['ataque'] = infoCard['ataque'];
      listaDeseos[i]['daño'] = infoCard['daño'];
      listaDeseos[i]['ID'] = infoCard['ID'];


      const vitrinaRespuesta = await axios.post(`${url}/dummy/prices`, { id_cartas: [cardId] });
      if (vitrinaRespuesta.status >= 300) {
        console.error("La solicitud de inventario no fue exitosa");
        return res.status(vitrinaRespuesta.status).send(vitrinaRespuesta.data);
      }
      const priceCard = vitrinaRespuesta.data[0];
      listaDeseos[i]['precio'] = priceCard['precio'];
      /* listaDeseos[i]['nombre'] = priceCard['nombre']; //cambiarle
      listaDeseos[i]['nombre'] = priceCard['nombre'];
      listaDeseos[i]['nombre'] = priceCard['nombre']; */

      
    }

      console.log(listaDeseos);

      // La respuesta fue exitosa, renderizar la vista con los datos obtenidos
      res.render("lista_deseos/index.ejs", {
        'title': "Lista de Deseos",
        'user': { 'id': userId },
        'products': listaDeseos,
      });
      console.log(listaDeseos); //user: req.session.user, products: rows sesion de usuarios

  } catch (error) {
    // Capturar cualquier error que ocurra durante la solicitud
    res.status(500).send("Error interno del servidor");
  }
};
