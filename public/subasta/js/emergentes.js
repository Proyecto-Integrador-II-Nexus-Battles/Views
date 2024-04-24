const compraRapida = document.querySelector(".compra_rapida_container");
const pujaContainer = document.querySelector(".puja_container");

function abrirPujar() {
  if (pujaContainer.style.display === "none") {
    pujaContainer.style.display = "flex";
    compraRapida.style.display = "none"; // Cerrar la compra rápida si está abierta
  } else {
    pujaContainer.style.display = "none"; // Cerrar la puja si ya está abierta
  }
}

function abrirCompraRapida() {
  if (compraRapida.style.display === "none") {
    compraRapida.style.display = "flex";
    pujaContainer.style.display = "none"; // Cerrar la puja si está abierta
  } else {
    compraRapida.style.display = "none"; // Cerrar la compra rápida si ya está abierta
  }
}

function cerrarEmer() {
  if (pujaContainer.style.display === "flex") {
    pujaContainer.style.display = "none";
  }
  if (compraRapida.style.display === "flex") {
    compraRapida.style.display = "none";
  }
}

function validarNumero(input) {
  input.value = input.value.replace(/\D/g, "");

  if (input.value.length > 10) {
    input.value = input.value.slice(0, 10);
  }
  if (parseInt(input.value) > parseInt(input.getAttribute("max"))) {
    input.value = input.getAttribute("max");
  }
}

// js modal pop ud emergante
const btn_AbrirModal_01 = document.querySelector("#btn_AbrirModal_01");
const btn_AbrirModal_02 = document.querySelector("#btn_AbrirModal_02");
const Cerrar_Modal_01 = document.querySelector(".Cerrar_Modal_01");
const Cerrar_Modal_02 = document.querySelector(".Cerrar_Modal_02");
const Detalles_Modal_01 = document.querySelector(".Detalles_Modal_01");
const Detalles_Modal_02 = document.querySelector(".Detalles_Modal_02");
const modal_01 = document.querySelector(".modal_01");
const modal_02 = document.querySelector(".modal_02");
const modal_Detalles_01 = document.querySelector(".modal_Detalles_01");
const Cerrar_Modal_Detalle = document.querySelector(".Cerrar_Modal_Detalle");

// abrir modales de venta y compra
btn_AbrirModal_01.addEventListener("click", () => {
  modal_01.showModal();
});
btn_AbrirModal_02.addEventListener("click", () => {
  modal_02.showModal();
});

// cerrar modal
Cerrar_Modal_01.addEventListener("click", () => {
  modal_01.close();
});
Cerrar_Modal_02.addEventListener("click", () => {
  modal_02.close();
});

// detalles modal
Detalles_Modal_01.addEventListener("click", () => {
  modal_01.close();
  modal_Detalles_01.showModal();
});

Detalles_Modal_02.addEventListener("click", () => {
  modal_02.close();
  modal_Detalles_01.showModal();
});

// function validarNumero(input) {
//   const maxValue = input.maxValue; // Replace with your desired max value
//   const numericValue = parseInt(input.value);

//   if (isNaN(numericValue)) {
//     input.value = '';
//   } else if (numericValue > maxValue) {
//     input.value = maxValue.toString();
//   }
// }
