// document.getElementById('carta').addEventListener('click', abrir);

// function abrir() {
//     document.getElementById('tipocarta').style.display = 'block';

// }
// function cerrar() {
//     document.getElementById('tipocarta').style.display = 'none';
//     document.getElementById('tipoheroe').style.display = 'none';
//     document.getElementById('tipoitem').style.display = 'none';

// ;
// }

// function abrir_tipo() {
//     document.getElementById('tipoheroe').style.display = 'block';
//     document.getElementById('tipocarta').style.display = 'none';
//     document.getElementById('tipoitem').style.display = 'block';
//     document.getElementById('tipoheroe').style.display = 'none';
// }

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });