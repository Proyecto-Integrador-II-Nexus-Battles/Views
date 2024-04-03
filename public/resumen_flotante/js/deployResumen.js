function deployEjsScript(data) {
  // Create a wrapper div element
  console.log(data);
  const resumen = document.getElementById("mostrar-resumen-flotante");
  resumen.addEventListener("click", () => {
    const resumenFlotante = document.getElementById("resumen-flotante");
    // Create the inner HTML content using template literals
    resumenFlotante.innerHTML = `
    <h2>Resumen de compra</h2>
    <hr class="lineados">
    <div class="resumen-flotante-contenido">
      <div class="comprados">
        ${data.Info.map(
          (carta) => `
          <div class="guardar_cartas">
            <div class="imagen_cartados">
              <img src="${carta.imagePath}" class="personajedos" />
            </div>
            <div class="informacion_cartados">
              <p>${carta.Name}</p>
            </div>
          </div>
        `
        ).join("")}
      </div>
    </div>
    <div class="productosdos">
      <div class="productosp">
        <p>Productos:</p>
        <p class="numproductos">${data.list_price_unit.reduce(
          (total, item) => total + item.CANTIDAD,
          0
        )}</p>
      </div>
      <div class="totalb">
        <p>Total bruto:</p>
        <p class="numtotalb">${data.totalBruto}</p>
      </div>
      <div class="iva">
        <p>Impuesto(IVA):</p>
        <p class="numiva">19%</p>
      </div>
      <hr class="lineatres">
      <div class="total">
        <h3>Total</h3>
        <p class="numtotal">${data.totalNeto}</p>
      </div>
    </div>
    <div class="pedidodos">
      <button class="realizardos" id="checkout"> Realizar pedido</button>
    </div>
    <div class="ircarrito">
      <button class="ircarritodos" id="checkout"> Ir al carrito</button>
    </div>
    <div class="guardar">
      <p>^</p>
    </div>
  `;
  });
}

// Example data
function getData() {
  const options = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  axios.get("/carro/resumenFlotante", options).then((response) => {
    deployEjsScript(response.data);
  });
}

getData();
