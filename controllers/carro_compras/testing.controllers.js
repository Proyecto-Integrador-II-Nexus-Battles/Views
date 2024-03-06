import path from "path";
import { fileURLToPath } from "url";

export const defaultR = (req, res) => {
  const datos = [{
    nombre: "Cedric",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/carro_compras/img/carta.jpeg"
  },
  {
    nombre: "Astrid",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/carro_compras/img/astrid.jpeg"
  },
  {
    nombre: "Ignis",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/carro_compras/img/ignis.jpeg"
  },
  {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/carro_compras/img/juancamilo.jpeg"
  },
  {
    nombre: "Luminara",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/carro_compras/img/Luminara.jpeg"
  },
   {
    nombre: "Picaro",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/carro_compras/img/picaro_silueta.jpg"
  },
  {
   nombre: "Zephyre",
   poder: "Hello World",
   vida: "si",
   defensa: "si",
   ataque: "si",
   dano: "si",
   imagen: "/carro_compras/img/zephyre.jpg"
 },
 {
  nombre: "Frostfang",
  poder: "Hello World",
  vida: "si",
  defensa: "si",
  ataque: "si",
  dano: "si",
  imagen: "/carro_compras/img/frostfang.jpg"
} ,
{
 nombre: "Home",
 poder: "Hello World",
 vida: "si",
 defensa: "si",
 ataque: "si",
 dano: "si",
 imagen: "/carro_compras/img/carta.jpeg"
} ,
{
 nombre: "Home",
 poder: "Hello World",
 vida: "si",
 defensa: "si",
 ataque: "si",
 dano: "si",
 imagen: "/carro_compras/img/carta.jpeg"
} ,
{
 nombre: "Home",
 poder: "Hello World",
 vida: "si",
 defensa: "si",
 ataque: "si",
 dano: "si",
 imagen: "/carro_compras/img/carta.jpeg"
} ,
{
 nombre: "Home",
 poder: "Hello World",
 vida: "si",
 defensa: "si",
 ataque: "si",
 dano: "si",
 imagen: "/carro_compras/img/carta.jpeg"
} ,
{
 nombre: "Home",
 poder: "Hello World",
 vida: "si",
 defensa: "si",
 ataque: "si",
 dano: "si",
 imagen: "/carro_compras/img/carta.jpeg"
}
];
  res.render("carro_compras/index", {datos});
};

export const defaultR2 = (req, res) => {
  const data = [{
    nombre: "Home",
    imagen: "/carro_compras/img/carta.jpeg"
  },
];
  res.render("carro_compras/index", {data});
};