import path from "path";
import { fileURLToPath } from "url";

export const defaultR = (req, res) => {
  const datos = [{
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "vitrina_productos/img/cedric.jpg"
  },
  {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "vitrina_productos/img/cedric.jpg"
  },
  {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "vitrina_productos/img/cedric.jpg"
  },
  {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "vitrina_productos/img/cedric.jpg"
  },
  {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "vitrina_productos/img/cedric.jpg"
  },
   {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "vitrina_productos/img/cedric.jpg"
  },
  {
   nombre: "Home",
   poder: "Hello World",
   vida: "si",
   defensa: "si",
   ataque: "si",
   dano: "si",
   imagen: "vitrina_productos/img/cedric.jpg"
 },
 {
  nombre: "Home",
  poder: "Hello World",
  vida: "si",
  defensa: "si",
  ataque: "si",
  dano: "si",
  imagen: "vitrina_productos/img/cedric.jpg"
} ,
{
 nombre: "Home",
 poder: "Hello World",
 vida: "si",
 defensa: "si",
 ataque: "si",
 dano: "si",
 imagen: "vitrina_productos/img/cedric.jpg"
} ,
{
 nombre: "Home",
 poder: "Hello World",
 vida: "si",
 defensa: "si",
 ataque: "si",
 dano: "si",
 imagen: "vitrina_productos/img/cedric.jpg"
} ,
{
 nombre: "Home",
 poder: "Hello World",
 vida: "si",
 defensa: "si",
 ataque: "si",
 dano: "si",
 imagen: "vitrina_productos/img/cedric.jpg"
} ,
{
 nombre: "Home",
 poder: "Hello World",
 vida: "si",
 defensa: "si",
 ataque: "si",
 dano: "si",
 imagen: "vitrina_productos/img/cedric.jpg"
} ,
 {
  nombre: "Home",
  poder: "Hello World",
  vida: "si",
  defensa: "si",
  ataque: "si",
  dano: "si",
  imagen: "vitrina_productos/img/cedric.jpg"
}
];
  res.render("vitrina_productos/index", {datos});
};


export const defaultR3 = (req, res) => {
  res.render("user_review");
};
