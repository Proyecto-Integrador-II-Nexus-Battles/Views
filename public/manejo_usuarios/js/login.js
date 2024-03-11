let form = document.querySelector('form')

form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {

  event.preventDefault();
  let formData = new FormData(form);
  console.log(formData);
  let data = Object.fromEntries(formData);
  console.log(data);
  let jsonData = JSON.stringify(data);
  console.log(jsonData);

  fetch('http://localhost:3000/usuario/logIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'POST'
    },
    body: jsonData

  }).then(res => res.json())
    .then(result => console.log(result))
    .catch(err => console.log(err))

}
