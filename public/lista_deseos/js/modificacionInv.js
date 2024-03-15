function modificacionCarta() {
    window.location.href = "/modificacionCarta";
}
const defaultFIle = "../Imagenes/Frostfang.jpg";
const img = document.getElementById('imagen');
const file = document.getElementById('pic');

function listenerInput(event) {
    const file = event.target.files[0];
    let url = window.URL.createObjectURL(file);
    img.src = url;
}


file?.addEventListener('change', listenerInput);

function navRouter(rute) {
    localStorage.setItem('showmodal', 'true')
}



