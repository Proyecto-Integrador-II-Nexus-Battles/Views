import { HOST, PORT } from "../../config.js";

export const defaultR = async (req, res) => {
  const dataResponse = await fetch(`${HOST}:${PORT}/inventario/getAllCards`);
  const datos = await dataResponse.json();
  res.render("inventario/index", { datos });
};

export const defaultR2 = (req, res) => {
  res.render("inventario/creacion_carta");
};

export const defaultR4 = (req, res) => {
  res.render("inventario/descripcion");
};
export const defaultR5 = (req, res) => {
  res.render("inventario/miCuenta");
};
export const defaultR3 = (req, res) => {
  res.render("inventario/modificacioncarta");
};
export const defaultR6 = (req, res) => {
  res.render("inventario/modificacioncartadescripcion");
};
export const defaultR7 = (req, res) => {
  res.render("inventario/jugaronline");
};
export const defaultR8 = (req, res) => {
  res.render("inventario/creacion_carta_items");
};
export const defaultR9 = (req, res) => {
  res.render("inventario/torneo");
};
export const default10 = (req, res) => {
  res.render("inventario/subasta");
};

export const prueba = async (req, res) => {
  try {
    const response = await fetch(`${HOST}:${PORT}/inventario/getEcommerceCard`);
    const datos = await response.json();
    res.render("subasta/subasta_vitrina", { datos });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
