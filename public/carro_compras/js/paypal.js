const botonPago = document.getElementById("checkout");

botonPago.addEventListener("click", async () => {
  try {
    const options = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    axios
      .post("/portal/createOrder", {}, options)
      .then((response) => {
        if (response.status === 200) {
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
    console.log("Respuesta del servidor:", respo < nse.data);
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
});
