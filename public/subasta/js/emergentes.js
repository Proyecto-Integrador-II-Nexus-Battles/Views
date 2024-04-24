const compraRapida = document.querySelector('.compra_rapida_container');
const pujaContainer = document.querySelector('.puja_container');

function abrirPujar() {
  if (pujaContainer.style.display === 'none') {
    pujaContainer.style.display = 'flex';
    compraRapida.style.display = 'none'; // Cerrar la compra rápida si está abierta
  } else {
    pujaContainer.style.display = 'none'; // Cerrar la puja si ya está abierta
  }
}

function abrirCompraRapida() {
  if (compraRapida.style.display === 'none') {
    compraRapida.style.display = 'flex';
    pujaContainer.style.display = 'none'; // Cerrar la puja si está abierta
  } else {
    compraRapida.style.display = 'none'; // Cerrar la compra rápida si ya está abierta
  }
}

function cerrarEmer() {
  if (pujaContainer.style.display === 'flex') {
    pujaContainer.style.display = 'none';
  }
  if (compraRapida.style.display === 'flex') {
    compraRapida.style.display = 'none';
  }
}


function validarNumero(input) {
  input.value = input.value.replace(/\D/g, '');

  if (parseInt(input.value) > parseInt(input.getAttribute('max'))) {
    input.value = input.getAttribute('max');
  }
}


// function validarNumero(input) {
//   const maxValue = input.maxValue; // Replace with your desired max value
//   const numericValue = parseInt(input.value);

//   if (isNaN(numericValue)) {
//     input.value = '';
//   } else if (numericValue > maxValue) {
//     input.value = maxValue.toString();
//   }
// }
