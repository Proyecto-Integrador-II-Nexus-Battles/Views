// Paginador para el Banco
let bancoPage = 1;
let bancoLimit = 6;
let bancoList = []; 

function loadBanco() {
  let beginGet = bancoLimit * (bancoPage - 1);
  let endGet = bancoLimit * bancoPage - 1;

  bancoList = document.querySelectorAll(".left-side .card");

  bancoList.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  listBancoPage();
}

loadBanco();

function listBancoPage() {
  let count = Math.ceil(bancoList.length / bancoLimit);
  document.querySelector(".listPageBanco").innerHTML = "";

  if (bancoPage != 1) {
    let prev = document.createElement("li");
    prev.innerText = "←";
    prev.setAttribute("onclick", "changeBancoPage(" + (bancoPage - 1) + ")");
    document.querySelector(".listPageBanco").appendChild(prev);
  }

  for (let i = 1; i <= count; i++) {
    let newPage = document.createElement("li");
    newPage.innerText = i;
    if (i == bancoPage) {
      newPage.classList.add("active");
    }
    newPage.setAttribute("onclick", "changeBancoPage(" + i + ")");
    document.querySelector(".listPageBanco").appendChild(newPage);
  }

  if (bancoPage != count) {
    let next = document.createElement("li");
    next.innerText = "→";
    next.setAttribute("onclick", "changeBancoPage(" + (bancoPage + 1) + ")");
    document.querySelector(".listPageBanco").appendChild(next);
  }
}

function changeBancoPage(i) {
  bancoPage = i;
  loadBanco();
}

// Paginador para el Inventario
let inventarioPage = 1;
let inventarioLimit = 6;
let inventarioList = []; 

function loadInventario() {
  let beginGet = inventarioLimit * (inventarioPage - 1);
  let endGet = inventarioLimit * inventarioPage - 1;


  inventarioList = document.querySelectorAll(".right-side .cartas");

  inventarioList.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  listInventarioPage();
}

loadInventario();

function listInventarioPage() {
  let count = Math.ceil(inventarioList.length / inventarioLimit);
  document.querySelector(".listPageInventario").innerHTML = "";

  if (inventarioPage != 1) {
    let prev = document.createElement("li");
    prev.innerText = "←";
    prev.setAttribute("onclick", "changeInventarioPage(" + (inventarioPage - 1) + ")");
    document.querySelector(".listPageInventario").appendChild(prev);
  }

  for (let i = 1; i <= count; i++) {
    let newPage = document.createElement("li");
    newPage.innerText = i;
    if (i == inventarioPage) {
      newPage.classList.add("active");
    }
    newPage.setAttribute("onclick", "changeInventarioPage(" + i + ")");
    document.querySelector(".listPageInventario").appendChild(newPage);
  }

  if (inventarioPage != count) {
    let next = document.createElement("li");
    next.innerText = "→";
    next.setAttribute("onclick", "changeInventarioPage(" + (inventarioPage + 1) + ")");
    document.querySelector(".listPageInventario").appendChild(next);
  }
}

function changeInventarioPage(i) {
  inventarioPage = i;
  loadInventario();
}
