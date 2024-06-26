const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const nombreUsuario = document.getElementById('user_input').value;
    const confirmarContraseña = document.getElementById('confirm_password').value;
    const token = "Bearer " + localStorage.getItem("token");

    const datos = {
        IdUsuario: token,
        new_username: nombreUsuario,
        new_password: confirmarContraseña,
    };
    console.log(datos)
    fetch(`/usuario/newData`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error al enviar los datos.');
        })
        .then(data => {
            console.log(data);
            location.reload();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    location.reload();
});
