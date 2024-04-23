function pujar() {
    const atributos = {}; // donde se almacenaran los atributos que se van a pujar

    const creditos_pujados = document.querySelector('input[name="cantidad_creditos"]').value;
    const cartas_min_elements = Array.from(document.querySelectorAll('.cartas_v_max.puja li'));

    // Extraer IDs y cantidades de las cartas
    const ids_cartas_min = [];
    const cantidad_cartas_min = [];
    
    cartas_min_elements.forEach(li => {
      const classes = li.classList;
      const id = classes[0];
      const cantidad = parseInt(classes[1]);
      ids_cartas_min.push(id);
      cantidad_cartas_min.push(cantidad);
    });

    console.log(creditos_pujados, cantidad_cartas_min, ids_cartas_min);

    // const cartas_min = cartas_min_elements.map(li => li.textContent);
    // const cartas_min_cantidad = cartas_min_elements.map(li => parseInt(li.querySelector('.quantity').textContent));
    // const cartas_max = document.querySelector('select[name="Type"]').value;
    // const cartas_max_cantidad = document.querySelector('input[name="creditos_max"]').value;

    // console.log(creditos_pujados, cartas_min, cartas_min_cantidad, cartas_max, cartas_max_cantidad);

    // // Función para mostrar mensaje de error
    // function showError(inputName, errorMessage) {
    //     const errorInput = document.querySelector(`input[name="${inputName}"] + .error_message`);
    //     errorInput.textContent = errorMessage;
    //     errorInput.style.display = 'block';
    // }

    // // Función para ocultar mensaje de error
    // function hideError(inputName) {
    //     const errorInput = document.querySelector(`input[name="${inputName}"] + .error_message`);
    //     errorInput.textContent = '';
    //     errorInput.style.display = 'none';
    // }

    // // Validación de créditos

    // if (Number(creditos_min) === 0 && Number(creditos_max) === 0) {
    //     hideError('creditos_max');
    //     hideError('creditos_min');
    //     console.log("No se seleccionaron créditos");
    // } else {
    //     if (Number(creditos_min) !== "" && Number(creditos_min) >= 0) {
    //         hideError('creditos_max');
    //         hideError('creditos_min');
    //         if (creditos_max !== "" && creditos_max !== 0) {
    //             hideError('creditos_max');
    //             hideError('creditos_min');
    //             if (Number(creditos_min) >= Number(creditos_max)) {
    //                 showError('creditos_min', "El valor de créditos menores debe ser menor");
    //                 return;
    //             } else {
    //                 hideError('creditos_max');
    //                 hideError('creditos_min');
    //                 filtros.creditos_min = creditos_min;
    //                 filtros.creditos_max = creditos_max;
    //             }
    //         } else {
    //             showError('creditos_max', "El valor de créditos mayores no puede ser 0 o vacío");
    //             return;
    //         }
    //     } else {
    //         showError('creditos_min', "El valor de créditos menores no puede estar vacío");
    //         return;
    //     }
    // }

    // if (Type !== "") {
    //     filtros.Type = Type;
    // }

    // const queryParams = new URLSearchParams(filtros).toString();
    // console.log(queryParams);
    // const token = "Bearer " + localStorage.getItem("token");
    // if (token === "Bearer null") {
    //   window.location.href = "/login";
    // }
    // console.log(queryParams);
    // const url = '/filteredCardsSubasta/?' + queryParams + '&token=' + token;
    // window.location.href = url
}