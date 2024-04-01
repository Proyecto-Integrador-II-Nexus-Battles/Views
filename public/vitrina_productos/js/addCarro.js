const { response } = require("express");

function addCarro(IdCard) {
    console.log("ID del producto: ", IdCard);
    const url = "/vitrina/enviarCarro";
    const token = "Bearer " + localStorage.getItem("token");
    if (token === "Bearer null") {
      window.location.href = "/login";
    }
    console.log("Token: ", token);
    const data = {
      IdCard: IdCard,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
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