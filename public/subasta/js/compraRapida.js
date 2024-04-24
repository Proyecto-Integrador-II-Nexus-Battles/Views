async function comprar(idSubasta){
   let flag_creditos = false; 
   let flag_cartas = true;
   const creditos = document.getElementById("creditosCompra").textContent.trim();
   const cartas= Array.from(document.querySelectorAll('.cartas_v_max.compra li'));
   const numero =[];
   const nombre=[];
   console.log(idSubasta)

   function showError(errorMessage) {
    const errorInput = document.getElementById('error_message');
    errorInput.textContent = errorMessage;
    errorInput.style.display = 'block';
    errorInput.style.padding = '25px';
    errorInput.style.height = '50px';
   
   }

   const creditos_usuario = await comprobarCreditos();
   
   
   if(creditos===null){
    flag_creditos = true;
   }

    if (parseInt(creditos) < creditos_usuario) {
    flag_creditos = true;
    }else{
        flag_creditos = false;
    }

    cartas.map((carta) => {
            const cartaText = carta.textContent.trim();
            const espacioIndex = cartaText.indexOf(' ');
            numero.push(cartaText.slice(0, espacioIndex))
            nombre.push(cartaText.slice(espacioIndex + 1))
            
    });

    const cartas_en_banco = await comprobarMiBanco()
    const cartasEnBancoNombre = cartas_en_banco.map(card => card.carta.Name);
    const cartasEnBancoCantidad = cartas_en_banco.map(card => card.cantidad);

    for (let i = 0; i < numero.length; i++) {
        const name = nombre[i];
        const cantidad = numero[i];
        if (!cartasEnBancoNombre.includes(name) || cantidad > cartasEnBancoCantidad[cartasEnBancoNombre.indexOf(name)]) {
            flag_cartas = false;
            console.log("No tienes cartas")
            return;
        }else{
            flag_cartas = true;
        }
    }

  
    

    if(flag_cartas===true && flag_creditos===true){
        showError("Compra realizada con exito")
    }else{
        showError("No tienes suficientes creditos o cartas para realizar la compra");
    }

    console.log("cartas: ",flag_cartas);
    console.log("creditos: ",flag_creditos);


    
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
            console.log(responseData);
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
            console.log(responseData.CANTIDAD);
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
