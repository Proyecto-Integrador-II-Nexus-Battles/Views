function filtrarCartas() {
  const filtros = {}; // donde se almacenaran los filtros seleccionados

  const sortOrder = document.querySelector('select[name="sortOrder"]').value;
  const min_max = document.querySelector('select[name="min_max"]').value;
  const [min, max] = min_max.split('-');
  const Type = document.querySelector('select[name="Type"]').value;
  const sale = document.querySelector('input[name="sale"]').checked;

  if (sortOrder !== "") {
    filtros.sortOrder = sortOrder;
  }
  if (min_max !== "") {
    filtros.minPrice = min;
    filtros.maxPrice = max;
  }
  if (Type !== "") {
    filtros.Type = Type;
  }
  if (sale) {
    filtros.sale = sale;
  }

  const queryParams = new URLSearchParams(filtros).toString();
  console.log(queryParams);
  const url = '/filteredCards/?' + queryParams;

  window.location.href = url

}