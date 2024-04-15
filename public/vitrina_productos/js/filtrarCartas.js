document.addEventListener("DOMContentLoaded", function() {   
  const botonFiltrar = document.getElementById("botonFiltrar");
  botonFiltrar.addEventListener("click", filtrarCartas);
 });
function filtrarCartas() {
  console.log("Ejecutando función filtrarCartas()...");
  const filtros = {}; // donde se almacenaran los filtros seleccionados
  const sortOrder = document.querySelector('select[name="sortOrder"]').value;
  const min = document.querySelector('select[name="min"]').value;
  const max = document.querySelector('select[name="max"]').value;
  const Type = document.querySelector('select[name="Type"]').value;
  const sale = document.querySelector('input[name="sale"]').checked;

  if (sortOrder !== "") {
    filtros.sortOrder = sortOrder;
  }
  if (min !== "") {
    filtros.minPrice = min;
  }
  if (max !== "") {
    filtros.maxPrice = max;
  }
  if (Type !== "") {
    filtros.Type = Type;
  }
  if (sale) {
    filtros.sale = sale;
  }

  
  console.log("Filtros:", filtros);
  const queryParams = new URLSearchParams(filtros).toString();
  console.log(queryParams);
  const url = '/filteredCards/?' + queryParams;

  window.location.href = url

}

function filtrarPorBusqueda(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const valorBusqueda = document.querySelector(".search_input").value.replace(/ /g, "_");
    if (valorBusqueda === "") {
      window.location.href = "/";
      return;
    }
    const url = `/search/${valorBusqueda}`;
    console.log(url);
    window.location.href = url
  }
}