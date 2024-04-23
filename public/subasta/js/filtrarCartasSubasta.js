function filtrarCartasSubasta() {
  const filtros = {}; // donde se almacenaran los filtros seleccionados

  const creditos_min = document.querySelector('input[name="creditos_min"]').value;
  const creditos_max = document.querySelector('input[name="creditos_max"]').value;
  const Type = document.querySelector('select[name="Type"]').value;

  // Función para mostrar mensaje de error
  function showError(inputName, errorMessage) {
    const errorInput = document.querySelector(`input[name="${inputName}"] + .error_message`);
    errorInput.textContent = errorMessage;
    errorInput.style.display = 'block';
  }

  // Función para ocultar mensaje de error
  function hideError(inputName) {
    const errorInput = document.querySelector(`input[name="${inputName}"] + .error_message`);
    errorInput.textContent = '';
    errorInput.style.display = 'none';
  }

  // Validación de créditos

  if (Number(creditos_min) === 0 && Number(creditos_max) === 0) {
    hideError('creditos_max');
    hideError('creditos_min');
    console.log("No se seleccionaron créditos");
  } else {
    if (Number(creditos_min) !== "" && Number(creditos_min) >= 0) {
      hideError('creditos_max');
      hideError('creditos_min');
      if (creditos_max !== "" && creditos_max !== 0) {
        hideError('creditos_max');
        hideError('creditos_min');
        if (Number(creditos_min) >= Number(creditos_max)) {
          showError('creditos_min', "El valor de créditos menores debe ser menor");
          return;
        } else {
          hideError('creditos_max');
          hideError('creditos_min');
          filtros.creditos_min = creditos_min;
          filtros.creditos_max = creditos_max;
        }
      } else {
        showError('creditos_max', "El valor de créditos mayores no puede ser 0 o vacío");
        return;
      }
    } else {
      showError('creditos_min', "El valor de créditos menores no puede estar vacío");
      return;
    }
  }

  if (Type !== "") {
    filtros.Type = Type;
  }

  const queryParams = new URLSearchParams(filtros).toString();

  const token = "Bearer " + localStorage.getItem("token");
  if (token === "Bearer null") {
    window.location.href = "/login";
  }
  console.log(queryParams);
  const url = '/filteredCardsSubasta/?' + queryParams + '&token=' + token;
  window.location.href = url
}