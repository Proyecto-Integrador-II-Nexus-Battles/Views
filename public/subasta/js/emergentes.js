const compraRapida = document.querySelector('.compra_rapida_container')
const pujaContainer = document.querySelector('.puja_container')

function abrirPujar(){
if(pujaContainer.style.display = 'none'){
  pujaContainer.style.display = 'flex'
}
}

function abrirCompraRapida(){
if(compraRapida.style.display = 'none'){
compraRapida.style.display = 'flex'
}
}
function cerrarEmer(){
  if(pujaContainer.style.display = 'flex'){
    pujaContainer.style.display ='none'
  }
  if(compraRapida.style.display = 'flex'){
    compraRapida.style.display = 'none'
  }
}


function validarNumero(input) {
  input.value = input.value.replace(/\D/g, '');
  if (input.value.length > 10) {
      input.value = input.value.slice(0, 10);
  }
}
