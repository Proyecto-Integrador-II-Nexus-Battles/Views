document
  .getElementById("show-recovery-form-btn")
  .addEventListener("click", function () {
    // Muestra el contenedor del formulario de recuperación al hacer clic en el botón
    document.getElementById("recovery-form-container").style.display = "block";
  });

document
  .getElementById("recovery-form")
  .addEventListener("submit", function (event) {
    // Detiene el envío del formulario para manejarlo con JavaScript
    event.preventDefault();

    // Aquí pondrías tu lógica para enviar el código de verificación al correo electrónico

    // Una vez enviado el código, muestra el formulario de verificación
    document.getElementById("recovery-form").reset(); // Resetea el formulario
    // Puedes agregar más lógica aquí según sea necesario, como mostrar un mensaje de éxito o de error
  });
