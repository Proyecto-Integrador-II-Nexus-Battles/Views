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
