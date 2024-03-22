

let form = document.querySelector('form')

form.addEventListener('submit', handleSubmit);
let mensaje = document.getElementById("estado")

function handleSubmit(event) {

  event.preventDefault();
  let formData = new FormData(form);
  let data = Object.fromEntries(formData);
  let jsonData = JSON.stringify(data);

  fetch('http://localhost:3000/usuario/logIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'POST'
    },
    body: jsonData
  }).then(res => res.json())
    .then(result => {
      console.log(result);
      if (result.error === 'Invalid credentials') {
        mensaje.innerHTML = "Inicio de sesión fallido, intente de nuevo";
        mensaje.classList.add("error-message");
      } else (
        mensaje.classList.remove("error-message")
      )
    })
    .catch(err => {
      mensaje.innerHTML = "Inicio de sesión fallido, intente de nuevo";
      mensaje.classList.add("error-message");
    });




}
