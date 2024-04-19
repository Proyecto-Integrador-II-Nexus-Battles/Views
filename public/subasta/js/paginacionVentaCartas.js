let thisPage = 1;
let limit = 6;
let list = []; // Inicializa la variable list como un array vacío

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;

  // Seleccionar todos los elementos de la clase .card
  list = document.querySelectorAll(".right-side .card, .left-side .card");

  list.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  listPage();
}

loadItem(); // Llama a la función loadItem() para que se ejecute al cargar la página

function listPage() {
  let count = Math.ceil(list.length / limit);
  document.querySelector(".listPage").innerHTML = "";

  // Agregar la flecha de retroceso si no estamos en la primera página
  if (thisPage != 1) {
    let prev = document.createElement("li");
    prev.innerText = "←";
    prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
    document.querySelector(".listPage").appendChild(prev);
  }

  // Agregar los números de página
  for (i = 1; i <= count; i++) {
    let newPage = document.createElement("li");
    newPage.innerText = i;
    if (i == thisPage) {
      newPage.classList.add("active");
    }
    newPage.setAttribute("onclick", "changePage(" + i + ")");
    document.querySelector(".listPage").appendChild(newPage);
  }

  // Agregar la flecha hacia adelante si no estamos en la última página
  if (thisPage != count) {
    let next = document.createElement("li");
    next.innerText = "→";
    next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
    document.querySelector(".listPage").appendChild(next);
  }
}

function changePage(i) {
  thisPage = i;
  loadItem();
}
