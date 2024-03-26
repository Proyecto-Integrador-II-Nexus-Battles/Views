import path from "path";
import { fileURLToPath } from "url";

export const defaultR = async (req, res) => {
  const dataResponse = await fetch('http://localhost:3000/inventario/getAllCards');
  const datos = await dataResponse.json();
  res.render("vitrina_productos/index", {datos});
};

export const defaultR2 = (req, res) => {
  const datos = [{
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "vitrina_productos/img/cedric.jpg",
    descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, aliquid.",
    tipo: 'noo',
    subtipo: 'siiis'
  },


];
  res.render("vitrina_productos/vistadetallada", {datos});
};
export const defaultR3 = (req, res) => {
  res.render("user_review");
};