document.addEventListener("DOMContentLoaded", function() {
    const cantidadElements = document.querySelectorAll('.cantidad');
    cantidadElements.forEach(cantidadElement => {
        const menosButton = cantidadElement.querySelector('.masmenos-menos');
        const masButton = cantidadElement.querySelector('.masmenos-mas');
        const cantidadParagraph = cantidadElement.querySelector('.cantidadnum');
        const idUsuario = cantidadParagraph.dataset.idUsuario;
        const idCarta = cantidadParagraph.dataset.id;

        menosButton.addEventListener('click', function() {
            restarCantidad(cantidadParagraph, idUsuario, idCarta);
        });

        masButton.addEventListener('click', function() {
            sumarCantidad(cantidadParagraph, idUsuario, idCarta);
        });
    });
});

function sumarCantidad(cantidadParagraph, idUsuario, idCarta) {
    let cantidad = parseInt(cantidadParagraph.textContent);
    cantidad++;
    cantidadParagraph.textContent = cantidad;
    actualizarCantidad(idUsuario, idCarta, cantidad);
}

function actualizarCantidad(idUsuario, idCarta, cantidad) {
    axios.post('http://localhost:4000/carro_compras/CHANGE-CANT', { IdUsuario: 1, IdCard: idCarta, Cantidad: cantidad })
    .then(response => {
        console.log(response.data.message); 
        loadItem();
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
