import path from "path";
import { fileURLToPath } from "url";

// export const defaultR = async (req, res) => {
//   const dataResponse = await fetch('http://localhost:1234/inventario/getAllCards');
//   const data = await dataResponse.json();
//   res.render("inventario/index",{data});
// };

export const defaultR = (req, res) => {
  const datos = [
    {
      nombre: "Nuevo personaje",
      poder: "Hello World",
      subtype:"Armas",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Nuevo personaje",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Nuevo personaje",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Nuevo personaje",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "inventario/imagenes/cedric.jpg",
    },
    {
      nombre: "si",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "inventario/imagenes/cedric.jpg",
    },
  ];
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

