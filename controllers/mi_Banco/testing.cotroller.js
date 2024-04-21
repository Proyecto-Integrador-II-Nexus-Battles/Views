import { HOST, PORT } from "../../config.js";
import axios from "axios";

export const defaultR = async (req, res) => {
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
    const datos = await response.json();
    console.log(datos);
    res.render("mi_banco/index", { datos });
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return res.redirect("/login");
    }
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
