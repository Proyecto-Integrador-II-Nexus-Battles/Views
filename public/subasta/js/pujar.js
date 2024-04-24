async function pujar() {
    const atributos = {};
    let flag_puja = true;

    const creditos_pujados = document.querySelector('input[name="cantidad_creditos"]').value;
    const cartas_min_elements = Array.from(document.querySelectorAll('.cartas_v_max.puja li'));

    const ids_cartas_min = [];
    const cantidad_cartas_min = [];

    cartas_min_elements.forEach(li => {
        const classes = li.classList;
        const id = classes[0];
        const cantidad = parseInt(classes[1]);
        ids_cartas_min.push(id);
        cantidad_cartas_min.push(cantidad);
    });

    const cartas_max_elements = Array.from(document.querySelectorAll('.cartas_max_container p'));
    const cartas_max_input_elements = Array.from(document.querySelectorAll('.cartas_max_container input[type="number"]'));

    const ids_cartas_max = cartas_max_elements.map(p => p.classList[0]);
    const cantidad_cartas_max = cartas_max_input_elements.map(input => parseInt(input.value) || 0);


    const min_creditos = document.querySelector('input[name="cantidad_creditos"]').getAttribute('min');

    function showError(inputName, errorMessage) {
        const errorInput = document.querySelector(`input[name="${inputName}"] + .error_message`);
        errorInput.textContent = errorMessage;
        errorInput.style.display = 'block';
    }

    function showErrorCards(errorMessage) {
        const errorInput = document.querySelector(`.cards.error_message`);
        errorInput.textContent = errorMessage;
        errorInput.style.display = 'block';
    }

    function hideError(inputName) {
        const errorInput = document.querySelector(`input[name="${inputName}"] + .error_message`);
        errorInput.textContent = '';
        errorInput.style.display = 'none';
    }

    function hideErrorCards() {
        const errorInput = document.querySelector(`.cards.error_message`);
        errorInput.textContent = '';
        errorInput.style.display = 'none';
    }

    const creditos_usuario = await comprobarCreditos()

    if (parseInt(creditos_pujados) >= parseInt(min_creditos)) {
        hideError('cantidad_creditos');
    } else if (parseInt(creditos_pujados) === 0) {
        showError('cantidad_creditos', "Tiene que pujar créditos");
        return;
    } else {
        showError('cantidad_creditos', "El valor de créditos pujados debe ser mayor a la ultima puja");
        return;
    }

    const cartas_en_banco = await comprobarMiBanco()

    const cartasEnBancoIds = cartas_en_banco.map(card => card.carta._id);
    const cartasEnBancoCantidades = cartas_en_banco.map(card => card.cantidad);


    if (parseInt(creditos_pujados) > creditos_usuario) {
        showError('cantidad_creditos', `No tienes suficientes créditos! Actualmente tienes ${creditos_usuario} créditos.`);
        flag_puja = false;
    }

    for (let i = 0; i < ids_cartas_min.length; i++) {
        const id = ids_cartas_min[i];
        const cantidad = cantidad_cartas_min[i];
        if (!cartasEnBancoIds.includes(id) || cantidad > cartasEnBancoCantidades[cartasEnBancoIds.indexOf(id)]) {
            showErrorCards("No tienes suficientes cartas mínimas");
            flag_puja = false;
            return;
        }
    }

    const allZero = cantidad_cartas_max.every(cantidad => cantidad === 0);
    if (!allZero && ids_cartas_max.length > 0) {
        for (let i = 0; i < ids_cartas_max.length; i++) {
            const id = ids_cartas_max[i];
            const cantidad = cantidad_cartas_max[i];
            if (!cartasEnBancoIds.includes(id) || cantidad > cartasEnBancoCantidades[cartasEnBancoIds.indexOf(id)]) {
                showErrorCards("No tienes suficientes cartas maximas");
                flag_puja = false;
                return;
            }
        }
    }

    if (!flag_puja) {
        console.log("No se puede hacer la puja");
    } else {
        hideErrorCards();
        console.log("Se puede hacer la puja!");
    }

    // Proceed with the rest of the code
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

async function comprobarMiBanco() {
    const url = "/vitrina/comprobarMiBanco";
    const token = "Bearer " + localStorage.getItem("token");
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        }
    };
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else if (response.status === 301 || response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = "/login";
        } else if (response.status === 404) {
            return [];
        } else {
            throw new Error("Error en la solicitud POST");
        }
    } catch (error) {
        console.error("Error en la solicitud: ", error);
        return error;
    }
}

async function comprobarCreditos() {
    const url = "/getCreditos";
    const token = "Bearer " + localStorage.getItem("token");
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        }
    };
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const responseData = await response.json();
            return responseData.CANTIDAD;
        } else if (response.status === 301 || response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = "/login";
        } else if (response.status === 404) {
            return [];
        } else {
            throw new Error("Error en la solicitud POST");
        }
    } catch (error) {
        console.error("Error en la solicitud: ", error);
        return error;
    }
}