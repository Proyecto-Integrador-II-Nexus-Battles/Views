document.addEventListener("DOMContentLoaded", function () {
  const cantidadElements = document.querySelectorAll(".cantidad");
  cantidadElements.forEach((cantidadElement) => {
    const menosButton = cantidadElement.querySelector(".masmenos-menos");
    const masButton = cantidadElement.querySelector(".masmenos-mas");
    const cantidadParagraph = cantidadElement.querySelector(".cantidadnum");
    const idUsuario = cantidadParagraph.dataset.idUsuario;
    const idCarta = cantidadParagraph.dataset.id;

    menosButton.addEventListener("click", function () {
      restarCantidad(cantidadParagraph, idUsuario, idCarta);
    });

    masButton.addEventListener("click", function () {
      sumarCantidad(cantidadParagraph, idUsuario, idCarta);
    });
  });
});

function sumarCantidad(cantidadParagraph, idUsuario, idCarta) {
  let cantidad = parseInt(cantidadParagraph.textContent);
  cantidad++;
  cantidadParagraph.textContent = cantidad;
  actualizarCantidad(idUsuario, idCarta, cantidad);
}

function actualizarCantidad(idUsuario, idCarta, cantidad) {
  debugger
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };

  // Actualiza la cantidad en el servidor
  axios
    .post(
      "/carro/changeCant",
      {
        IdCard: idCarta,
        Cantidad: cantidad,
      },
      {
        headers: headers,
      }
    )
    .then((response) => {
      if (response.status === 200) {
        // Obtén los nuevos totales del servidor
        axios
          .post(`${HOST}:${PORT}/carro/INFO-CARDS`, {}, { headers: headers })
          .then((response) => {
            const responseData = response.data;
            const totalNeto = responseData.totalNeto;
            const totalBruto = responseData.totalBruto;
            const totalNetoFormateado = formatNumber(totalNeto);
            const totalBrutoFormateado = formatNumber(totalBruto);

            // Actualiza el contenido de los elementos HTML correspondientes
            document.getElementById("totalNeto").textContent =
              totalNetoFormateado;
            document.getElementById("totalBruto").textContent =
              totalBrutoFormateado;
          })
          .catch((error) => {
            console.error("Error al obtener los nuevos totales:", error);
          });
      } else {
        console.error("Error al actualizar la cantidad");
      }
    })
    .catch((error) => {
      console.error("Error al actualizar la cantidad:", error);
    });
}

function restarCantidad(cantidadParagraph, idUsuario, idCarta) {
  let cantidad = parseInt(cantidadParagraph.textContent);
  if (cantidad > 0) {
    cantidad--;
    cantidadParagraph.textContent = cantidad;
    actualizarCantidad(idUsuario, idCarta, cantidad);
  }
}
