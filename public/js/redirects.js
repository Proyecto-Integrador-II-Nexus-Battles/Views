async function redirectListaDeseos() {
  const url = "/lista_deseos";
  const token = "Bearer " + localStorage.getItem("token");
  if (token === "Bearer null") {
    window.location.href = "/login";
  }
  window.location.href = url + "?token=" + token;
}

async function redirectCarroCompra() {
  const url = "/carro/carroCompras";
  const token = "Bearer " + localStorage.getItem("token");
  if (token === "Bearer null") {
    window.location.href = "/login";
  }
  window.location.href = url + "?token=" + token;
}

async function redirectMiBanco() {
  const url = "/mi_banco";
  const token = "Bearer " + localStorage.getItem("token");
  if (token === "Bearer null") {
    window.location.href = "/login";
  }
  window.location.href = url + "?token=" + token;
}

async function redirectMiCuenta() {
  const url = "/miCuenta";
  const token = "Bearer " + localStorage.getItem("token");
  if (token === "Bearer null") {
    window.location.href = "/login";
  }
  window.location.href = url + "?token=" + token;
}