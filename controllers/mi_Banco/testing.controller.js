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
    res.render("mi_banco/index", { datos });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const defaultR2 = async (req, res) => {
  const token = req.headers.authorization
  try {
    const response = await fetch(`${HOST}:${PORT}/inventario/GetdeckCard`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const cartas = await response.json();
    res.json(cartas);
  } catch (error) {
    console.error('Error al obtener las cartas:', error);
    res.status(500).json({ error: 'Hubo un problema al obtener las cartas' });
  }
};

export const defaultR3 = async (req, res) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization;
  const cards = req.body.cartas;
  console.log(typeof cards);
  try {
    const response = await fetch(`${HOST}:${PORT}/inventario/deckCard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        cartas: cards,
      }),
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Hubo un problema al obtener las cartas" });
  }
};
