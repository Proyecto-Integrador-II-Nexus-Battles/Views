function deployEjsScript() {
  // Función para formatear un número con puntos como separador de miles
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  // Función para formatear el total bruto
  function formatTotalBruto(totalBruto) {
    if (!isNaN(totalBruto)) {
      return parseFloat(totalBruto).toLocaleString("es-ES", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    return totalBruto;
  }

  // Create a wrapper div element
  const resumen = document.getElementById("mostrar-resumen-flotante");
  resumen.addEventListener("click", async () => {
    const data = await getData();
    console.log("This is the data");
    console.log(data);
    const resumenFlotante = document.getElementById("resumen-flotante");

    if (resumenFlotante.innerHTML !== "") {
      resumenFlotante.innerHTML = "";
    }

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
        <p class="numtotalb">${formatTotalBruto(data.totalBruto)}&nbsp;COP</p>
      </div>
      <div class="iva">
        <p>Impuesto(IVA):</p>
        <p class="numiva">19%</p>
      </div>
      <hr class="lineatres">
      <div class="total">
        <h3>Total</h3>
        <p class="numtotal">${formatNumber(data.totalNeto)}&nbsp;COP</p>
      </div>
    </div>
    <div class="pedidodos">
      <button class="realizardos" id="checkout"> Realizar pedido</button>
    </div>
    <div onclick= "redirectCarroCompra()" class="ircarrito">
      <button class="ircarritodos" id="checkout"> Ir al carrito</button>
    </div>
    <div class="guardar">
      <p>^</p>
    </div>
  `;
    const botonGuardar = document.querySelector(".guardar");
    botonGuardar.addEventListener("click", function () {
      // Toggle de la clase para mostrar/ocultar el resumen flotante
      resumenFlotante.classList.toggle("resumen-flotante-oculto");
    });
    const botonPago = document.getElementById("checkout");

    botonPago.addEventListener("click", async () => {
      try {
        console.log("Botón de pago presionado");
        const options = {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };
        axios
          .post("/portal/createOrder", {}, options)
          .then((response) => {
            if (response.status === 200) {
              console.log("Orden creada correctamente");
              const paypalUrl = response.data.paypalUrl;
              window.location.href = paypalUrl;
              res.redirect(paypalUrl);
            } else {
              console.error("Error al crear la orden");
            }
          })
          .catch((error) => {
            console.error("Error al realizar la solicitud:", error);
          });
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    });
  });
}

// Example data
async function getData() {
  const options = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const response = await axios.get("/carro/resumenFlotante", options);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

deployEjsScript();
