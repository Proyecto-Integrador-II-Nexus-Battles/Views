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

  fetch(`http://${HOST}:${PORT_BACK}/usuario/logIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST",
    },
    body: jsonData,
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      if (result.error === "Invalid credentials") {
        mensaje.innerHTML = "Inicio de sesión fallido, intente de nuevo";
        mensaje.classList.add("error-message");
      } else {
        mensaje.classList.remove("error-message");
        console.log("aaa si inicio jiajia");
        localStorage.setItem("token", result.token);

        //http://${HOST}:${PORT}/usuario/recibir

        /* fetch(`http://${HOST}:${PORT_VITRINA}/usuario/vitrinarecibir`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${}`,
            'Access-Control-Allow-Methods': 'POST'
          },
          body: JSON.stringify({ result })

        }).then(res => res.json())
          .then(result => {
            localStorage.setItem('result', JSON.stringify(result));

            //a la página donde redirecciona
            window.location.href = `http://${HOST}:${PORT}/inventario/getEcommerceCard`

          }) */
        window.location.href = "/"
        //http://${HOST}:${PORT}/inventario/getEcommerceCard
        //`http://${HOST}:${PORT}/vitrina`
      }
    })
    .catch((err) => {
      mensaje.innerHTML = "Inicio de sesión fallido, intente de nuevo";
      mensaje.classList.add("error-message");
    });
}
