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
      _id: "H#0001",
      imagePath: "/inventario/imagenes/picaro_silueta.jpg",
      TypeCard: "Hero",
      Power: 1,
      Live: 16,
      Defense: 8,
      DamageS_ides: 8,
      AttackBase: 10,
      AttackS_ides: 10,
      Subtype: "Machete",
      Type: "Picaro",
      Name: "Ion daga solar",
      OnSale: false
    },
    {
      _id: "H#0002",
      imagePath: "/inventario/imagenes/fabiana.jpeg",
      TypeCard: "Hero",
      Power: 1,
      Live: 16,
      Defense: 8,
      DamageS_ides: 8,
      AttackBase: 10,
      AttackS_ides: 10,
      Name: "Sombra del Cuervo",
      Subtype: "Veneno",
      Type: "Picaro",
      OnSale: false
    },
    {
      _id: "H#0003",
      imagePath: "/inventario/imagenes/Frostfang.jpg",
      TypeCard: "Hero",
      Power: 1,
      Live:20,
      Defense: 10,
      DamageS_ides: 6,
      AttackBase: 10,
      AttackS_ides: 8,
      Name: "Frostfang",
      Subtype: "Hielo",
      Type: "Mago",
      OnSale: true
    },
    {
      _id: "H#0004",
      imagePath: "inventario/imagenes/Zephyr Shadowblade.jpg",
      TypeCard: "Hero",
      Power: 1,
      Live: 20,
      Defense: 10,
      DamageS_ides: 6,
      AttackBase: 10,
      AttackS_ides: 8,
      Name: "Zephyr Shadowblade",
      Subtype: "Fuego",
      Type: "Mago",
      OnSale: false
    },
    {
      _id: "H#0005",
      imagePath: "/inventario/imagenes/cedric.jpg",
      TypeCard: "Hero",
      Power: 1,
      Live: 24,
      Defense: 11,
      DamageS_ides: 4,
      AttackBase: 10,
      AttackS_ides: 6,
      Name: "cedric",
      Subtype: "Armas",
      Type: "Guerrero",
      OnSale: false
    },
    {
      _id: "H#0006",
      imagePath: "/inventario/imagenes/juan camilo.jpeg",
      TypeCard: "Hero",
      Power: 1,
      Live: 24,
      Defense: 11,
      DamageS_ides: 4,
      AttackBase: 10,
      AttackS_ides: 6,
      Name: "Tiberius Steelguard",
      Subtype: "Tanque",
      Type: "Guerrero",
      OnSale: true
    },
    {
      _id: "H#0001",
      imagePath: "/inventario/imagenes/picaro_silueta.jpg",
      TypeCard: "Hero",
      Power: 1,
      Live: 16,
      Defense: 8,
      DamageS_ides: 8,
      AttackBase: 10,
      AttackS_ides: 10,
      Subtype: "Machete",
      Type: "Picaro",
      Name: "Ion daga solar",
      OnSale: false
    },
    {
      _id: "H#0002",
      imagePath: "/inventario/imagenes/fabiana.jpeg",
      TypeCard: "Hero",
      Power: 1,
      Live: 16,
      Defense: 8,
      DamageS_ides: 8,
      AttackBase: 10,
      AttackS_ides: 10,
      Name: "Sombra del Cuervo",
      Subtype: "Veneno",
      Type: "Picaro",
      OnSale: false
    },
    {
      _id: "H#0003",
      imagePath: "/inventario/imagenes/Frostfang.jpg",
      TypeCard: "Hero",
      Power: 1,
      Live:20,
      Defense: 10,
      DamageS_ides: 6,
      AttackBase: 10,
      AttackS_ides: 8,
      Name: "Frostfang",
      Subtype: "Hielo",
      Type: "Mago",
      OnSale: true
    },
    {
      _id: "H#0004",
      imagePath: "inventario/imagenes/Zephyr Shadowblade.jpg",
      TypeCard: "Hero",
      Power: 1,
      Live: 20,
      Defense: 10,
      DamageS_ides: 6,
      AttackBase: 10,
      AttackS_ides: 8,
      Name: "Zephyr Shadowblade",
      Subtype: "Fuego",
      Type: "Mago",
      OnSale: false
    },
    {
      _id: "H#0005",
      imagePath: "/inventario/imagenes/cedric.jpg",
      TypeCard: "Hero",
      Power: 1,
      Live: 24,
      Defense: 11,
      DamageS_ides: 4,
      AttackBase: 10,
      AttackS_ides: 6,
      Name: "cedric",
      Subtype: "Armas",
      Type: "Guerrero",
      OnSale: false
    },
    {
      _id: "H#0006",
      imagePath: "/inventario/imagenes/juan camilo.jpeg",
      TypeCard: "Hero",
      Power: 1,
      Live: 24,
      Defense: 11,
      DamageS_ides: 4,
      AttackBase: 10,
      AttackS_ides: 6,
      Name: "Tiberius Steelguard",
      Subtype: "Tanque",
      Type: "Guerrero",
      OnSale: true
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
export const defaultR3 = (req, res) => {
  res.render("inventario/modificacionCarta");
};
export const defaultR6 = (req, res) => {
  res.render("inventario/modificacionCartaDescripcion");
};
export const defaultR7 = (req, res) => {
  res.render("inventario/jugarOnline");
};

