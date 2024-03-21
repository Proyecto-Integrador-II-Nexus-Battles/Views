import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";


export const defaultR = (req, res) => {

  axios.post('http://localhost:4000/carro_compras/LIST-CARD', { IdUsuario: 1 })
    .then(async response => {
      const cartas = response.data.cartas;
      console.log(cartas);
      res.render("carro_compras/index", { cartas });

    })
    .catch(error => {
      console.error('Error al realizar la solicitud:', error);
    });


};

export const defaultR2 = (req, res) => {
  const data = [{
    nombre: "Home",
    imagen: "/carro_compras/img/carta.jpeg"
  },
  ];
  res.render("carro_compras/index", { data });
};