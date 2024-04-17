import axios from "axios";
import { HOST, PORT } from "../../config.js";

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const defaultR = (req, res) => {
  const options = {
    headers: { Authorization: `${req.query.token}` },
  };
  axios
    .post(`${HOST}:${PORT}/carro/INFO-CARDS`, {}, options)
    .then(async (response) => {
      const responseData = response.data;
      console.log(responseData);

      const info = responseData.Info;
      const totales = responseData.totales.map(formatNumber);
      const totalNeto = responseData.totalNeto;
      let totalBruto = responseData.totalBruto;

      if (!isNaN(totalBruto)) {
        // Formatea el número con coma como separador decimal
        totalBruto = parseFloat(totalBruto).toLocaleString("es-ES", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
      }

      const cantidad = responseData.list_price_unit;
      const cantidadtotal = cantidad.reduce(
        (total, item) => total + item.CANTIDAD,
        0
      );

      const tasaCambio = 3900;
      const totalNetoUSD = totalNeto / tasaCambio;

      const totalNetoFormateado = formatNumber(totalNeto);
      // No es necesario volver a formatear totalBruto aquí, ya que lo formateamos arriba

      console.log(totalNetoUSD);
      console.log(cantidadtotal);

      // Renderiza la vista con los datos obtenidos
      res.render("carro_compras/index", {
        info: info,
        totales: totales,
        totalNeto: totalNetoFormateado,
        totalBruto: totalBruto, // No es necesario volver a formatearlo aquí
        cantidad: cantidad,
        cantidadtotal: cantidadtotal,
        totalNetoUSD: totalNetoUSD,
      });
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
    });
};

export const addCantidad = (req, res) => {
  const { IdCard, Cantidad } = req.body;
  const options = {
    headers: { Authorization: `${req.headers.authorization}` },
  };
  console.log(options);
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
    headers: { Authorization: `${req.headers.authorization}` },
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
    headers: { Authorization: `${req.headers.authorization}` },
  };
  axios
    .post(`${HOST}:${PORT}/pagos/create-order`, {}, options)
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

export const resumenFlotante = (req, res) => {
  const options = {
    headers: { Authorization: `${req.headers.authorization}` },
  };
  axios
    .post(`${HOST}:${PORT}/carro/INFO-CARDS`, {}, options)
    .then((response) => {
      const responseData = response.data;
      console.log(responseData);
      res.json(response.data);
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        res.status(401).json({
          message:
            "Debes iniciar sesión para poder acceder al carrito de compras.",
        });
      }
      console.error("Error al realizar la solicitud:", error);
    });
};
