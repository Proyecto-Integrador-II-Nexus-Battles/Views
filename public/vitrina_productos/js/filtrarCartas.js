function filtrarCartas() {
  const filtros = {}; // donde se almacenaran los filtros seleccionados
  // const sortOrder = document.querySelector('select[name="sortOrder"]').value;
  const min = document.getElementById('min_price').value;
  const max = document.getElementById('max_price').value;
  const Type = document.getElementById('Type').value;
  const sale = document.getElementById('sale').checked;
  if (sortOrder !== "" && min !== "" && max !== "" && Type !== "") {
    filtros.sortOrder = sortOrder;
    filtros.minPrice = min;
    filtros.maxPrice = max;
    filtros.Type = Type;
    filtros.sale = sale;
  }
  const queryParams = new URLSearchParams(filtros).toString();
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