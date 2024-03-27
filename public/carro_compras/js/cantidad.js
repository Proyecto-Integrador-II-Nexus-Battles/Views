document.addEventListener("DOMContentLoaded", function() {
    const cantidadElements = document.querySelectorAll('.cantidad');
    cantidadElements.forEach(cantidadElement => {
        const menosButton = cantidadElement.querySelector('.masmenos-menos');
        const masButton = cantidadElement.querySelector('.masmenos-mas');
        const cantidadParagraph = cantidadElement.querySelector('.cantidadx');
        const idUsuario = cantidadParagraph.dataset.idUsuario;
        const idCarta = cantidadParagraph.dataset.id;

        menosButton.addEventListener('click', function() {
            restarCantidad(cantidadParagraph, idUsuario, idCarta);
        });

        masButton.addEventListener('click', function() {
            console.log("mas-boton")
            sumarCantidad(cantidadParagraph, idUsuario, idCarta);
        });
    });
});

function sumarCantidad(cantidadParagraph, idUsuario, idCarta) {
    let cantidad = parseInt(cantidadParagraph.textContent);
    console.log(cantidad)
    cantidad++;
    cantidadParagraph.textContent = cantidad;
    actualizarCantidad(idUsuario, idCarta, cantidad);
    
}

function actualizarCantidad(idUsuario, idCarta, cantidad) {
    axios.post('http://localhost:4000/carro_compras/ADD-CARD', { IdUsuario: 1, IdCard: idCarta, Cantidad: cantidad })
    .then(response => {
        console.log(response.data.message); 
    })
    .catch(error => {
        console.error('Error al actualizar la cantidad:', error);
    });
}

function restarCantidad(cantidadParagraph, idUsuario, idCarta) {
        let cantidad = parseInt(cantidadParagraph.textContent);
        if (cantidad > 0) {
            cantidad--;
            cantidadParagraph.textContent = cantidad;
            actualizarCantidad(idUsuario, idCarta, cantidad);
        }
    }

