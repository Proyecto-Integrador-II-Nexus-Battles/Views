const boton_abrir = document.querySelector(".abrir-btn");
const navbar = document.getElementById("navbar");

boton_abrir.addEventListener("click", abrir_btn);
function abrir_btn() {
  navbar.classList.toggle("visible");
  console.log("si");
}
function cambiarColor(elemento) {
  if (elemento.style.color === "red") {
    elemento.style.color = "black";
  } else {
    elemento.style.color = "red";
  }
}
