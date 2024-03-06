import path from "path";
import { fileURLToPath } from "url";

export const defaultR = async (req, res) => {
  // const dataResponse = await fetch('http://localhost:3000/getAllCards');
  // const data = await dataResponse.json();
  // res.render("inventario/index",{data});
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

