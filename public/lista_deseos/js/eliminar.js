function eliminar(item_id) {
  console.log("Eliminar item con id: ", item_id);
  // Crear instancia de XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Definir la URL de la solicitud utilizando una variable de entorno
  const url = `/deseos/eliminar/${encodeURIComponent(item_id)}`;
  xhr.open("POST", url, true);
  // Establecer el encabezado de la solicitud
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader(
    "Authorization",
    `Bearer ${localStorage.getItem("token")}`
  );

  // Definir el callback para manejar la respuesta
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // La solicitud fue exitosa
      alert("Se eliminó correctamente");

      // Obtener el elemento que deseas eliminar
      const elementoAEliminar = document.getElementById("carta-" + item_id);

      // Eliminar el elemento
      elementoAEliminar.remove();
    } else if (xhr.status === 301) {
      // El usuario no está autorizado
      window.location.href = "/";
    } else {
      // La solicitud falló
      alert("No se pudo eliminar correctamente");
    }
  };
  // Enviar la solicitud con los datos
  xhr.send();
}
