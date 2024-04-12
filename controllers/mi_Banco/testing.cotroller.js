import { HOST, PORT } from "../../config.js";
import axios from "axios";

export const defaultR = async (req, res) => {
  try {
    console.log(req.query);
    const response = await fetch(`${HOST}:${PORT}/inventario/getBankCards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': `${req.query.token}`,
      },
      // body: JSON.stringify({ IdUsuario: 7 }) // Corrección aquí
    });
    const datos = await response.json(); 
    console.log(datos);
    res.render("mi_banco/index", { datos });
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
