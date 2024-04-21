document.addEventListener('DOMContentLoaded', function () {
    const resumenTres = document.querySelector('.resumentres');
    const realizarBtn = document.querySelector('.realizar');
    const cancelarBtn = document.querySelector('.cancelar');
    const confirmarBtn = document.querySelector('.confirmar');
    const fondo = document.querySelector('.fondo');
    const divisaUno = document.querySelector('.divisauno');
    const divisaDos = document.querySelector('.divisados');

    realizarBtn.addEventListener('click', function () {
        // Mostrar el contenedor resumentres al hacer clic en el botón Realizar pedido
        resumenTres.style.display = 'block';
        // Mostrar el fondo semi-transparente
        fondo.style.display = 'block';

        // Obtener el valor en pesos colombianos desde el elemento HTML
        const totalNetoText = divisaUno.textContent.trim(); // Obtener el texto completo
        const totalNetoCOP = parseFloat(totalNetoText.split(' ')[1]); // Obtener solo el valor numérico
       
        // Verificar si se obtuvo un valor numérico válido
        if (!isNaN(totalNetoCOP)) {
            // Realizar la conversión a dólares utilizando la tasa de cambio (1 USD = 3804 COP)
            const tasaCambio = 3804;
            const totalNetoUSD = totalNetoCOP / tasaCambio;

            // Mostrar el resultado en el elemento HTML divisaDos
            divisaDos.textContent = `USD $${totalNetoUSD.toFixed(2)}`;
        } else {
            console.error('El valor en pesos colombianos no es válido.');
        }
    });

    cancelarBtn.addEventListener('click', function () {
        // Ocultar el contenedor resumentres al hacer clic en el botón Cancelar
        resumenTres.style.display = 'none';
        // Ocultar el fondo semi-transparente
        fondo.style.display = 'none';
    });

    confirmarBtn.addEventListener('click', function () {
        // Aquí puedes agregar la lógica para confirmar el pedido si es necesario
        // Por ahora, no haremos nada con la ventana emergente, solo mantendremos el fondo semi-transparente visible
        resumenTres.style.display = 'block'; // Asegurar que la ventana emergente esté visible
        fondo.style.display = 'block'; // Mantener el fondo semi-transparente visible
    });
});
