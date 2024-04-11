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

// js modal pop ud emergante
const btn_AbrirModal_01 = document.querySelector("#btn_AbrirModal_01");
const btn_AbrirModal_02 = document.querySelector("#btn_AbrirModal_02");
const Cerrar_Modal_01 = document.querySelector(".Cerrar_Modal_01");
const Cerrar_Modal_02 = document.querySelector(".Cerrar_Modal_02");
const Detalles_Modal_01 = document.querySelector(".Detalles_Modal_01");
const Detalles_Modal_02 = document.querySelector(".Detalles_Modal_02");
const modal_01 = document.querySelector(".modal_01");
const modal_02 = document.querySelector(".modal_02");

// abrir modales de venta y compra
btn_AbrirModal_01.addEventListener("click",() =>{
  modal_01.showModal();
})
btn_AbrirModal_02.addEventListener("click",() =>{
  modal_02.showModal();
})
// cerrar modal
Cerrar_Modal_01.addEventListener("click",() =>{
  modal_01.close()
})
Cerrar_Modal_02.addEventListener("click",() =>{
  modal_02.close()
})

// detalles modal
