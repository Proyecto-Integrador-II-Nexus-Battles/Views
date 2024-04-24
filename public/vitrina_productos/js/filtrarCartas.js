function filtrarCartas() {
  const filtros = {}; // donde se almacenaran los filtros seleccionados
  const sortOrder = document.getElementById('sortOrder').value;
  const min = document.getElementById('min_price').value;
  const max = document.getElementById('max_price').value;
  const Type = document.getElementById('Type').value;
  const sale = document.getElementById('sale').checked;
  if (sortOrder !== "") {
    filtros.sortOrder = sortOrder;
  }
  if(min !== "") {
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
  const queryParams = new URLSearchParams(filtros).toString();
  const url = '/filteredCards/?' + queryParams;
  window.location.href = url
}


function filtrarPorBusqueda() {
  const valorBusqueda = document.querySelector(".search_input").value.toLowerCase();

  // Obtener todas las cartas
  const cartas = document.querySelectorAll(".card");

  cartas.forEach(function(carta) {
    const nombreCarta = carta.querySelector("#nombre").textContent.toLowerCase();

    if (nombreCarta.includes(valorBusqueda)) {
      carta.style.display = "block";  // Mostrar la carta si coincide con la búsqueda
    } else {
      carta.style.display = "none";   // Ocultar la carta si no coincide con la búsqueda
    }
  });
}








