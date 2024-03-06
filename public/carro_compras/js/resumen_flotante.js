document.addEventListener('DOMContentLoaded', function () {
    const resumenFlotante = document.getElementById('resumen-flotante');
    const botonMostrar = document.getElementById('mostrar-resumen-flotante');
    const botonGuardar = document.querySelector('.guardar');

    botonMostrar.addEventListener('click', function () {
        // Toggle de la clase para mostrar/ocultar el resumen flotante
        resumenFlotante.classList.toggle('resumen-flotante-oculto');
    });

    botonGuardar.addEventListener('click', function () {
        // Toggle de la clase para mostrar/ocultar el resumen flotante
        resumenFlotante.classList.toggle('resumen-flotante-oculto');
    });
});
