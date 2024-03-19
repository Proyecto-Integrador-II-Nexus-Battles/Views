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
    //ITEMS
    {
      "_id": "I#0001",
      "imagePath": "/inventario/imagenes/escudo_de_pinchos.jpeg",
      "TypeCard": "Item",
      "Name": "Pincho de escudo",
      "Type": "Guerrero",
      "Subtype": "Tanque",
      "Description": "Si el ataque del oponente es menor que la defensa del guerrero el oponente recibe +1 de daño",
      "DamageBuff": 1,
      "OnSale": true
    },
    {
      "_id": "I#0002",
      "imagePath": "/inventario/imagenes/empuñadura_de_furia.jpeg",
      "TypeCard": "Item",
      "Name": "Empuñadura de furia",
      "Type": "Guerrero",
      "Subtype": "Armas",
      "Rounds": 2,
      "Description": "+1 de daño por dos turnos, esto causa que el guerrero pierda -1 de v_ida en los mismos turnos",
      "DamageBuff": 1,
      "LiveNerf": -1,
      "OnSale": false
    },
    {
      "_id": "I#0003",
      "imagePath": "String",
      "TypeCard": "Item",
      "Name": "Anillo para piro-exploción",
      "Type": "Mago",
      "Subtype": "Fuego",
      "Description": "+3 de daño",
      "DamageBuff": 3,
      "OnSale": true
    },
    {
      "_id": "I#0004",
      "imagePath": "String",
      "TypeCard": "Item",
      "Name": "Libro de la ventisca helada",
      "Type": "Mago",
      "Subtype": "Hielo",
      "Description": "+2 de daño",
      "DamageBuff": 2,
      "OnSale": false
    },
    {
      "_id": "I#0005",
      "imagePath": "String",
      "TypeCard": "Item",
      "Name": "Veneno lacerante",
      "Type": "Picaro",
      "Subtype": "Veneno",
      "Description": "-1 al poder del oponente. solo aplica cada dos turno",
      "EnemyDamageNerf": "-1",
      "RoundTimer": 2,
      "OnSale": false
    },
    {
      "_id": "I#0006",
      "imagePath": "String",
      "TypeCard": "Item",
      "Name": "Mancuerna yugular",
      "Type": "Guerrero",
      "Subtype": "Tanque",
      "Description": "Explota por 2 el valor en turno causado por cierra sanguiente en el oponente",
      "DamageXBurst": 2,
      "OnSale": false
    },
    //ARMAS
    {
      "_id": "A#0001",
      "imagePath": "String",
      "TypeCard": "Armor",
      "Name": "Pesada",
      "Type": "Guerrero",
      "Subtype": "Tanque",
      "DefenseBuff": 4,
      "OnSale": true
    },
    {
      "_id": "A#0002",
      "imagePath": "String",
      "TypeCard": "Armor",
      "Name": "Media",
      "Type": "Guerrero",
      "Subtype": "Armas",
      "DefenseBuff": 3,
      "OnSale": false
    },
    {
      "_id": "A#0003",
      "imagePath": "String",
      "TypeCard": "Armor",
      "Name": "Tela",
      "Type": "Mago",
      "Subtype": "Fuego",
      "DefenseBuff": 1,
      "OnSale": false
    },
    {
      "_id": "A#0004",
      "imagePath": "String",
      "TypeCard": "Armor",
      "Name": "Tela",
      "Type": "Mago",
      "Subtype": "Hielo",
      "DefenseBuff": 1,
      "OnSale": true
    },
    {
      "_id": "A#0005",
      "imagePath": "String",
      "TypeCard": "Armor",
      "Name": "Media liviana",
      "Type": "Picaro",
      "Subtype": "Veneno",
      "DefenseBuff": 2,
      "OnSale": false
    },
    {
      "_id": "A#0006",
      "imagePath": "String",
      "TypeCard": "Armor",
      "Name": "Media liviana",
      "Type": "Picaro",
      "Subtype": "Machete",
      "DefenseBuff": 2,
      "OnSale": false
    }
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

