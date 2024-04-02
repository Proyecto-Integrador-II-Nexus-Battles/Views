function moverCarroCompras(item_id) {
  const url = `/deseos/moverCarta`;
  const data = {
    IdCard: item_id,
    Cantidad: 1,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        eliminar(item_id);
        return response.json();
      }
      if (response.status === 301) {
        window.location.href = "/";
      }
      throw new Error("Error en la solicitud POST");
    })
    .then((data) => {
      console.log("Respuesta del servidor: ", data);
      alert("Su producto fue agregado exitosamente al carro de compras");
      eliminar(item_id);
    })
    .catch((error) => {
      console.error("Error en la solicutud: ", error);
    });
}
