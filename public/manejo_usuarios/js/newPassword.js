const button = document.getElementById("submit_btn");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const confirmarContraseña = document.getElementById("confirm_password").value;
  let email = window.location.search.split("email=")[1];
  if (email.includes("&code=")) {
    email = email.split("&code=")[0];
  }
  const code = window.location.search.split("code=")[1] ?? "";
  const datos = {
    email: email,
    code: code,
    password: confirmarContraseña,
  };
  console.log(datos);

  fetch(`/usuario/recover/new`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        return window.location.replace("/login");
      }
      throw new Error("Error al enviar los datos.");
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
