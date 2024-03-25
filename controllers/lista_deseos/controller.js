//Este es un archivo de ejemplo de un controlador de Node.js. Reemplazar por otro archivo con un controlador real.
import axios from "axios";

// Funcion de llamar a mis cartas de lista de deseos  //process.env.WISH_URL para cambiar la IP añadido como variable
export const listaDeseos = async (req, res) => {
  const url = process.env.WISH_URL; // Utiliza la variable de entorno si está definida
  if (!url) {
    // Manejar el caso en que la variable de entorno no esté definida
    console.error("La variable de entorno WISH_URL no está definida");
    return res.status(500).send("Error interno del servidor");
  }
  try {
    const respuesta = await axios.post(`${url}/lista_deseos`, { user_id: 15 }); // Conexión con el backend
    console.log(respuesta.status);
    if (respuesta.status === 200) {
      // La respuesta fue exitosa, renderizar la vista con los datos obtenidos
      res.render("lista_deseos/index.ejs", {
        title: "Lista de Deseos",
        user: { id: 15 },
        products: respuesta.data,
      });
      console.log(respuesta.data); //user: req.session.user, products: rows sesion de usuarios
    } else {
      // La respuesta no fue exitosa, responder con un error 500
      console.error("La solicitud no fue exitosa");
      res.status(500).send(respuesta.data["status"]);
    }
  } catch (error) {
    // Capturar cualquier error que ocurra durante la solicitud
    res.status(500).send("Error interno del servidor");
  }
};
