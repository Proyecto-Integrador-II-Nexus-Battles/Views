import { HOST, PORT, PORT_BACK, PORT_VITRINA } from "../../config.js";

console.log(PORT);
let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);
let mensaje = document.getElementById("estado");

function handleSubmit(event) {
  event.preventDefault();
  let formData = new FormData(form);
  let data = Object.fromEntries(formData);
  let jsonData = JSON.stringify(data);
  console.log("hola");

  fetch(`/usuario/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST",
    },
    body: jsonData,
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(JSON.stringify(result));
      if (result.error === "Invalid credentials") {
        mensaje.innerHTML = "Inicio de sesión fallido, intente de nuevo";
        mensaje.classList.add("error-message");
      } else {
        mensaje.classList.remove("error-message");
        console.log("aaa si inicio jiajia");
        localStorage.setItem("token", JSON.stringify(result.token));
        window.location.href = "/"
      }
    })
    .catch((err) => {
      mensaje.innerHTML = "Inicio de sesión fallido, intente de nuevo";
      mensaje.classList.add("error-message");
    });
}
