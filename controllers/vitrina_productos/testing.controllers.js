import path from "path";
import { fileURLToPath } from "url";

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
      "imagePath": "/inventario/imagenes/Anillo_para_piro_exploción.jpeg",
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
      "imagePath": "/inventario/imagenes/Libro_de_la_ventisca_helada.jpeg",
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
      "imagePath": "/inventario/imagenes/Veneno_lacerante.jpeg",
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
      "imagePath": "/inventario/imagenes/Mancuerna_yugular.jpeg",
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
      "imagePath": "/inventario/imagenes/pesada.jpeg",
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
    },
    //TALENT
    {
      "_id": "E#0001",
      "imagePath": "String",
      "TypeCard": "Talent",
      "Name": "Golpe de defensa",
      "Type": "Guerrero",
      "Subtype": "Tanque",
      "EspecialDamageBuff": 4,
      "NormalAttackBuff": 1,
      "OnSale": false
    },
    {
      "_id": "E#0002",
      "imagePath": "String",
      "TypeCard": "Talent",
      "Name": "Segundo impulso",
      "Type": "Guerrero",
      "Subtype": "Armas",
      "EspecialLiveBuff": 3,
      "NormalLiveBuff_WithDice": 4,
      "OnSale": false
    },
    {
      "_id": "E#0004",
      "imagePath": "String",
      "TypeCard": "Talent",
      "Name": "Luz cegadora",
      "Type": "Mago",
      "Subtype": "Fuego",
      "EspecialDescriptionBuff": "No recibe daño en el siguiente turno",
      "NormalLiveBuff": 1,
      "OnSale": false
    },
    {
      "_id": "E#0003",
      "imagePath": "String",
      "TypeCard": "Talent",
      "Name": "Frio concentrado",
      "Type": "Mago",
      "Subtype": "Hielo",
      "EspecialDamageBuff": 2,
      "NormalDamageDebuff": -1,
      "NormalDescriptionDebuff": "menos 1 de poder al oponente",
      "OnSale": true
    },
    {
      "_id": "E#0005",
      "imagePath": "String",
      "TypeCard": "Talent",
      "Name": "Toma y lleva",
      "Type": "Picaro",
      "Subtype": "Veneno",
      "EspecialDescriptionBuff": "Disminuye a la mitad del daño causado por el oponente y se lo retorna",
      "NormalDamageBuff": 1,
      "OnSale": false
    },
    {
      "_id": "E#0006",
      "imagePath": "String",
      "TypeCard": "Talent",
      "Name": "Intim_idación sangrienta",
      "Type": "Picaro",
      "Subtype": "Machete",
      "EspecialLiveBuff": 2,
      "NormalDamageBuff": 1,
      "OnSale": true
    },
    //Weapon
    {
      "_id": "W#0001",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Espada de una mano",
      "Type": "Guerrero",
      "Subtype": "Tanque",
      "AttackBuff": 1,
      "OnSale": false
    },
    {
      "_id": "W#0002",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Espada de dos manos",
      "Type": "Guerrero",
      "Subtype": "Armas",
      "AttackBuff": 1,
      "OnSale": true
    },
    {
      "_id": "W#0003",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Escudo de dragón",
      "Type": "Guerrero",
      "Subtype": "Tanque",
      "DefenseBuff": 1,
      "OnSale": false
    },
    {
      "_id": "W#0004",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Piedra de afilar",
      "Type": "Guerrero",
      "Subtype": "Armas",
      "DamageBuff": 2,
      "OnSale": false
    },
    {
      "_id": "W#0005",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Orbe de manos ardientes",
      "Type": "Mago",
      "Subtype": "Fuego",
      "DamageBuff": 1,
      "OnSale": false
    },
    {
      "_id": "W#0006",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Fuego fatuo",
      "Type": "Mago",
      "Subtype": "Fuego",
      "DamageBuff": 1,
      "OnSale": true
    },
    {
      "_id": "W#0007",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Báculo de permafrost",
      "Type": "Mago",
      "Subtype": "Hielo",
      "EnemyDamageNerf": -1,
      "OnSale": false
    },
    {
      "_id": "W#0008",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Venas heladas",
      "Type": "Mago",
      "Subtype": "Hielo",
      "DamageBuff": 1,
      "OnSale": false
    },
    {
      "_id": "W#0009",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Daga purulenta",
      "Type": "Picaro",
      "Subtype": "Veneno",
      "Rounds": 2,
      "DamageBuff": 1,
      "OnSale": false
    },
    {
      "_id": "W#0010",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Vision borrosa",
      "Type": "Picaro",
      "Subtype": "Veneno",
      "EnemyDamageNerf": -1,
      "OnSale": false
    },
    {
      "_id": "W#0011",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Machete vendito",
      "Type": "Picaro",
      "Subtype": "Machete",
      "DamageBuff": 2,
      "OnSale": false
    },
    {
      "_id": "W#0012",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Cierra sangrienta",
      "Type": "Picaro",
      "Subtype": "Machete",
      "Rounds": 2,
      "DamageBuff": 2,
      "OnSale": false
    }
  ];
  res.render("vitrina_productos/index", { datos });
};

export const defaultR2 = (req, res) => {
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
      "imagePath": "/inventario/imagenes/Anillo_para_piro_exploción.jpeg",
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
      "imagePath": "/inventario/imagenes/Libro_de_la_ventisca_helada.jpeg",
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
      "imagePath": "/inventario/imagenes/Veneno_lacerante.jpeg",
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
      "imagePath": "/inventario/imagenes/Mancuerna_yugular.jpeg",
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
      "imagePath": "/inventario/imagenes/pesada.jpeg",
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
    },
    //TALENT
    {
      "_id": "E#0001",
      "imagePath": "String",
      "TypeCard": "Talent",
      "Name": "Golpe de defensa",
      "Type": "Guerrero",
      "Subtype": "Tanque",
      "EspecialDamageBuff": 4,
      "NormalAttackBuff": 1,
      "OnSale": false
    },
    {
      "_id": "E#0002",
      "imagePath": "String",
      "TypeCard": "Talent",
      "Name": "Segundo impulso",
      "Type": "Guerrero",
      "Subtype": "Armas",
      "EspecialLiveBuff": 3,
      "NormalLiveBuff_WithDice": 4,
      "OnSale": false
    },
    {
      "_id": "E#0004",
      "imagePath": "String",
      "TypeCard": "Talent",
      "Name": "Luz cegadora",
      "Type": "Mago",
      "Subtype": "Fuego",
      "EspecialDescriptionBuff": "No recibe daño en el siguiente turno",
      "NormalLiveBuff": 1,
      "OnSale": false
    },
    {
      "_id": "E#0003",
      "imagePath": "String",
      "TypeCard": "Talent",
      "Name": "Frio concentrado",
      "Type": "Mago",
      "Subtype": "Hielo",
      "EspecialDamageBuff": 2,
      "NormalDamageDebuff": -1,
      "NormalDescriptionDebuff": "menos 1 de poder al oponente",
      "OnSale": true
    },
    {
      "_id": "E#0005",
      "imagePath": "String",
      "TypeCard": "Talent",
      "Name": "Toma y lleva",
      "Type": "Picaro",
      "Subtype": "Veneno",
      "EspecialDescriptionBuff": "Disminuye a la mitad del daño causado por el oponente y se lo retorna",
      "NormalDamageBuff": 1,
      "OnSale": false
    },
    {
      "_id": "E#0006",
      "imagePath": "String",
      "TypeCard": "Talent",
      "Name": "Intim_idación sangrienta",
      "Type": "Picaro",
      "Subtype": "Machete",
      "EspecialLiveBuff": 2,
      "NormalDamageBuff": 1,
      "OnSale": true
    },
    //Weapon
    {
      "_id": "W#0001",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Espada de una mano",
      "Type": "Guerrero",
      "Subtype": "Tanque",
      "AttackBuff": 1,
      "OnSale": false
    },
    {
      "_id": "W#0002",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Espada de dos manos",
      "Type": "Guerrero",
      "Subtype": "Armas",
      "AttackBuff": 1,
      "OnSale": true
    },
    {
      "_id": "W#0003",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Escudo de dragón",
      "Type": "Guerrero",
      "Subtype": "Tanque",
      "DefenseBuff": 1,
      "OnSale": false
    },
    {
      "_id": "W#0004",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Piedra de afilar",
      "Type": "Guerrero",
      "Subtype": "Armas",
      "DamageBuff": 2,
      "OnSale": false
    },
    {
      "_id": "W#0005",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Orbe de manos ardientes",
      "Type": "Mago",
      "Subtype": "Fuego",
      "DamageBuff": 1,
      "OnSale": false
    },
    {
      "_id": "W#0006",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Fuego fatuo",
      "Type": "Mago",
      "Subtype": "Fuego",
      "DamageBuff": 1,
      "OnSale": true
    },
    {
      "_id": "W#0007",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Báculo de permafrost",
      "Type": "Mago",
      "Subtype": "Hielo",
      "EnemyDamageNerf": -1,
      "OnSale": false
    },
    {
      "_id": "W#0008",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Venas heladas",
      "Type": "Mago",
      "Subtype": "Hielo",
      "DamageBuff": 1,
      "OnSale": false
    },
    {
      "_id": "W#0009",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Daga purulenta",
      "Type": "Picaro",
      "Subtype": "Veneno",
      "Rounds": 2,
      "DamageBuff": 1,
      "OnSale": false
    },
    {
      "_id": "W#0010",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Vision borrosa",
      "Type": "Picaro",
      "Subtype": "Veneno",
      "EnemyDamageNerf": -1,
      "OnSale": false
    },
    {
      "_id": "W#0011",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Machete vendito",
      "Type": "Picaro",
      "Subtype": "Machete",
      "DamageBuff": 2,
      "OnSale": false
    },
    {
      "_id": "W#0012",
      "imagePath": "String",
      "TypeCard": "Weapon",
      "Name": "Cierra sangrienta",
      "Type": "Picaro",
      "Subtype": "Machete",
      "Rounds": 2,
      "DamageBuff": 2,
      "OnSale": false
    }
  ];
  res.render("vitrina_productos/vistadetallada", {datos});
};
export const defaultR3 = (req, res) => {
  res.render("user_review");
};
