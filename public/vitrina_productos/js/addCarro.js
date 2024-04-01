import { authHeader } from "../../js/authentication.js";

window.addCarro = function addCarro(IdCard) {
    console.log("ID del producto: ", IdCard);
    const url = "/vitrina/enviarCarro";
    const data = {
      IdCard: IdCard,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${authHeader()}`,
      },
      body: JSON.stringify(data),
    };
  
    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 301) {
          window.location.href = "/";
        }
        throw new Error("Error en la solicitud POST");
      })
      .then((data) => {
        console.log("Respuesta del servidor: ", data);
        console.log("Su producto fue agregado exitosamente al carro de compras");
      })
      .catch((error) => {
        console.error("Error en la solicutud: ", error);
      });
  }