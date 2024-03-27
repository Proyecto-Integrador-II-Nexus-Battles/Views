
                                 document.querySelector('.list').addEventListener('click', async (event) => {
        if (event.target.classList.contains('eliminarx')) {
            try {
                const idCarta = event.target.getAttribute('data-id');
                await axios.post('http://localhost:4000/carro_compras/DELETE-CARD', { IdUsuario: 1, IdCard: idCarta });
                console.log('Carta eliminada correctamente');

                const itemToRemove = event.target.closest('.item');
                itemToRemove.remove();

                // Verificar si la carta eliminada estaba en la primera página
                if (document.querySelectorAll('.list .item').length < limit && thisPage !== 1) {
                    // Si hay elementos en la segunda página, mover el primero a la primera página
                    const secondPageItems = document.querySelectorAll('.list .item');
                    if (secondPageItems.length > 0) {
                        const firstItemOfSecondPage = secondPageItems[0];
                        document.querySelector('.list').prepend(firstItemOfSecondPage);
                    }
                }

                // Actualizar automáticamente el HTML
                loadItem();
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        }
    });
                            