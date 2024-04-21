var cartaPrincipalSubasta = null;

document.addEventListener("DOMContentLoaded", function () {
  var leftSideCards = document.querySelectorAll(".left-side .card");
  leftSideCards.forEach(function (card) {
    card.addEventListener("click", function () {
      leftSideCards.forEach(function (card) {
        card.classList.remove("card-select");
      });
      card.classList.add("card-select");
      cartaPrincipalSubasta = card.id;
    });
  });
  var rightSideCards = document.querySelectorAll(".right-side .cartas");
  rightSideCards.forEach(function (card) {
    card.addEventListener("click", function () {
      if (card.classList.contains("card-select")) {
        card.classList.remove("card-select");
        var elementosQuantity = card.getElementsByClassName("quantity");
        var elementosArray = Array.from(elementosQuantity);
        elementosArray.forEach(function (elemento) {
          elemento.remove();
        });
      } else {
        let cantidad = prompt("Ingresa una cantidad de cartas", "1");
        if (cantidad == null || cantidad == "") {
        } else {
          card.classList.add("card-select");
          var divCantidad = document.createElement("div");
          divCantidad.classList.add("quantity");
          var spanNumero = document.createElement("span");
          spanNumero.id = "cantidad-" + card.id;
          spanNumero.textContent = cantidad;
          divCantidad.appendChild(spanNumero);
          card.insertBefore(divCantidad, card.firstChild);
        }
      }
    });
  });
});

var minCartas = [];
var maxCartas = [];

function confirmarCarta() {
  if (minCartas.length === 0) {
    var cartasSeleccionadas = document.querySelectorAll(
      ".right-side .cartas.card-select"
    );
    cartasSeleccionadas.forEach(function (card) {
      minCartas.push({
        id: card.id,
        cantidad: document.getElementById("cantidad-" + card.id).textContent,
      });
      card.classList.remove("card-select");
      var elementosQuantity = card.getElementsByClassName("quantity");
      var elementosArray = Array.from(elementosQuantity);
      elementosArray.forEach(function (elemento) {
        elemento.remove();
      });
    });
    console.log(minCartas);
    document.getElementById("mensajeCarta").textContent =
      "Selecciona tus cartas maximas";
  } else {
    var cartasSeleccionadas = document.querySelectorAll(
      ".right-side .cartas.card-select"
    );
    cartasSeleccionadas.forEach(function (card) {
      maxCartas.push({
        id: card.id,
        cantidad: document.getElementById("cantidad-" + card.id).textContent,
      });
      card.classList.remove("card-select");
      var elementosQuantity = card.getElementsByClassName("quantity");
      var elementosArray = Array.from(elementosQuantity);
      elementosArray.forEach(function (elemento) {
        elemento.remove();
      });
    });
    document.getElementById("mensajeCarta").textContent =
      "Ya seleccionaste exitosamente tus cartas :)";
    document.getElementById("bontonConfirmarCartas").style.display = "none";
    console.log(maxCartas);
  }
}


async function enviarSubasta(){

  if(!cartaPrincipalSubasta){
    alert('Por favor selecciona una carta para subastar')
  }

  var valorCreditosMin = document.getElementById('creditosMinimos').value;
  var valorCreditosMax = document.getElementById('creditosMaximos').value;
  var valorTiempoCreditos = document.getElementById('tiempo-creditos').value;

  const datosSubasta = {
    ID_CARD: cartaPrincipalSubasta,
    TIEMPO: valorTiempoCreditos,
    CREDITOS_MIN: valorCreditosMin,
    CREDITOS_MAX: valorCreditosMax,
    CARTAS_MINIMAS: minCartas,
    CARTAS_MAXIMAS: maxCartas,
  };
  const opciones = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosSubasta)
  };
  
  // Realizar la solicitud Fetch
  fetch('/crear-subasta', opciones)
    .then(response => {
      if (!response.ok) {
        throw new Error('Hubo un problema con la solicitud.');
      }
      return response.json();
    })
    .then(data => {
      console.log('Respuesta del servidor:', data);
      // window.location.href = 'https://www.ejemplo.com'; //redirecionamintoyoooo
    })
    .catch(error => {
      console.error('Error:', error);
    });

};





