const abrir_btn = document.querySelector('.abrir-btn');
const navbar = document.getElementById('navbar');

abrir_btn.addEventListener('click', toggleNavbar);

function toggleNavbar() {
    navbar.classList.toggle('visible');
    console.log("si");
}
