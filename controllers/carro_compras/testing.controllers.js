import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import { HOST, HOST_PORT } from "../../config.js";

//export const defaultR = (req, res) => {

//  axios.post('http://localhost:4000/carro_compras/LIST-CARD', { IdUsuario: 1 })
//    .then(async response => {
//      const cartas = response.data.cartas;
//      console.log(cartas);
//      res.render("carro_compras/index", { cartas });
//
//    })
//    .catch(error => {
//      console.error('Error al realizar la solicitud:', error);
//    });

export const defaultR = async (req, res) => {
  try {

    const dataResponse = await fetch(`http://localhost:4000/carro_compras/INFO-CARDS`, { IdUsuario: 1 });
    console.log(dataResponse.data)
    // Accede a la información dentro del objeto devuelto
   
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    res.status(500).send('Error interno del servidor');
  }
};


//};


// export const defaultR = (req, res) => {
//   const datos = [
//       {
//         _id: "H#0001",
//         imagePath: "/inventario/imagenes/picaro_silueta.jpg",
//         TypeCard: "Hero",
//         Power: 1,
//         Live: 16,
//         Defense: 8,
//         DamageS_ides: 8,
//         AttackBase: 10,
//         AttackS_ides: 10,
//        Subtype: "Machete",
//         Type: "Picaro",
//        Name: "Ion daga solar",
//        OnSale: false
//     },
//     
//   ];
//    res.render("carro_compras/index", { datos });
//  };
  

export const defaultR2 = (req, res) => {
  const data = [{
    nombre: "Home",
    imagen: "/carro_compras/img/carta.jpeg"
  },
  ];
  res.render("carro_compras/index", { data });
};