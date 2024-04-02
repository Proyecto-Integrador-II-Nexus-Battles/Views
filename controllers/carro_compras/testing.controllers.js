import axios from "axios";
import { HOST, PORT } from "../../config.js";

export const defaultR = (req, res) => {
  const options = {
    headers: { Authorization: `${req.headers.Authorization}` },
  };
  axios
    .post(`${HOST}:${PORT}/carro/INFO-CARDS`, {}, options)
    .then(async (response) => {
      const responseData = response.data;
      console.log(responseData);

      const info = responseData.Info;
      const totales = responseData.totales;
      const totalNeto = responseData.totalNeto;
      const totalBruto = responseData.totalBruto;
      const cantidad = responseData.list_price_unit;
      const cantidadtotal = cantidad.reduce(
        (total, item) => total + item.CANTIDAD,
        0
      );

      console.log(cantidadtotal);
      // Renderiza la vista con los datos obtenidos
      res.render("carro_compras/index", {
        info: info,
        totales: totales,
        totalNeto: totalNeto,
        totalBruto: totalBruto,
        cantidad: cantidad,
        cantidadtotal: cantidadtotal,
      });
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
    });
};

export const addCantidad = (req, res) => {
  const { IdCard, Cantidad } = req.body;
  const options = {
    headers: { Authorization: `${req.headers.Authorization}` },
  };
  axios
    .post(
      `${HOST}:${PORT}/carro/CHANGE-CANT`,
      {
        IdCard: IdCard,
        Cantidad: Cantidad,
      },
      options
    )
    .then((response) => {
      console.log(response.data.message);
      res.json({ message: response.data.message });
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
      res.status(500).json({ message: "Error al agregar la carta" });
    });
};

export const deleteCard = (req, res) => {
  const { IdCard } = req.body;
  const options = {
    headers: { Authorization: `${req.headers.Authorization}` },
  };
  axios
    .post(`${HOST}:${PORT}/carro/DELETE-CARD`, { IdCard: IdCard }, options)
    .then((response) => {
      console.log(response.data.message);
      res.json({ message: response.data.message });
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
      res.status(500).json({ message: "Error al eliminar la carta" });
    });
};

export const createOrder = (req, res) => {
  const options = {
    headers: { Authorization: `${req.headers.Authorization}` },
  };
  axios
    .post(`${HOST}:${PORT}/portal_pagos/create-order`, {}, options)
    .then((response) => {
      const paypalUrl = response.data.paypalUrl;
      console.log("Respuesta del servidor:", response.data);
      res.json({ paypalUrl: paypalUrl });
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
      res.status(500).json({ message: "Error al crear la orden" });
    });
};
