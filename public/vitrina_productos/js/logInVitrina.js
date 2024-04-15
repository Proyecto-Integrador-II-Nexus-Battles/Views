function logInVitrina() {
    var token = localStorage.getItem('token');
    console.log('its in');
    if (token !== null) {
        document.querySelector('.login_btn').textContent = 'Cerrar Sesión';
        document.querySelector('.login_btn').addEventListener('click', function () {
            localStorage.removeItem('token');
            window.location.reload(true);
        });
    } else {
        console.log('Not logged in');
    }
}