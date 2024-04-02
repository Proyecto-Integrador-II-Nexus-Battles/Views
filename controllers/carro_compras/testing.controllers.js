import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import { HOST, HOST_PORT } from "../../config.js";

export const defaultR = (req, res) => {

  axios.post('http://localhost:4000/carro_compras/INFO-CARDS', { IdUsuario: 1 })
    .then(async response => {
     const responseData = response.data;
     console.log(responseData);

    const info = responseData.Info;
    const totales = responseData.totales;
    const totalNeto = responseData.totalNeto;
    const totalBruto = responseData.totalBruto;
    const cantidad = responseData.list_price_unit;
    const cantidadtotal = cantidad.reduce((total, item) => total + item.CANTIDAD, 0);

    console.log(cantidadtotal);
    // Renderiza la vista con los datos obtenidos
    res.render("carro_compras/index", {
      info: info,
      totales: totales,
      totalNeto: totalNeto,
      totalBruto: totalBruto,
      cantidad: cantidad,
      cantidadtotal: cantidadtotal
    });
 
 
    })
    .catch(error => {
      console.error('Error al realizar la solicitud:', error);
    });
 
 };





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