document
  .getElementById("show-recovery-form-btn")
  .addEventListener("click", function () {
    // Muestra el contenedor del formulario de recuperación al hacer clic en el botón
    const form = document.getElementById("preguntas-form");
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    let jsonData = JSON.stringify(data);

    fetch(`/usuario/recover/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Error al enviar los datos.");
      })
      .catch((err) => console.log(err));

    document.getElementById("recovery-form-container").style.display = "block";
  });

document.getElementById("verify-code").addEventListener("click", function (e) {
  // Verifica el código de recuperación al hacer clic en el botón
  e.preventDefault();
  const form = document.getElementById("preguntas-form");
  let formData = new FormData(form);
  let data = Object.fromEntries(formData);
  let jsonData = JSON.stringify(data);
  console.log("data", data);

  fetch(`/usuario/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  })
    .then((res) => {
      if (res.ok) {
        window.location.replace(
          `/usuario/recover/new?email=${data.email}&code=${data.code}`
        );
      }
      throw new Error("Error al enviar los datos.");
    })
    .catch((err) => console.log(err));
});
