function ValidarNombreUsuario() {
    const inputUsuario = document.getElementById('user_input')
    fetch('manejo_usuarios/ApodosInhabilitados.json')
        .then(function (res){
            return res.json();
        })
        .then(function(data){
            let flag = false;
            let value = inputUsuario.value.replace(/\s/g, "").toLowerCase();
            data.forEach(function(nombre){
                if (value.includes(nombre.name.toLowerCase())) {
                    flag = true;
                }
            });
            if (flag) {
                inputUsuario.setCustomValidity('El apodo contiene una palabra la cual no es permitida');
            } else {
                inputUsuario.setCustomValidity("");
            }
        })
        .catch(function(error) {
            console.error('Error al cargar el JSON:', error);
        });
}

function ValidarContrasena() {
    const password = document.getElementById('new_password');
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;

    if (!regex.test(password.value)) {
        if (!/(?=.*[a-z])/.test(password.value)) {
            password.setCustomValidity("La contraseña debe contener al menos un miniscula.");
        } else if (!/(?=.*[A-Z])/.test(password.value)) {
            password.setCustomValidity("La contraseña debe contener al menos una mayúscula.");
        } else if (!/(?=.*\d)/.test(password.value)) {
            password.setCustomValidity("La contraseña debe contener al menos un numero.");
        } else if (!/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(password.value)) {
            password.setCustomValidity("La contraseña debe contener al menos un carácter especial (!@#$%^&*_).");
        }
        return false;
    } else {
        password.setCustomValidity("");
        return true;
    }
}

function ValidarArchivo() {
    const archivoInput = document.getElementById('foto');
    const archivo = archivoInput.files[0];
    const extensionesPermitidas = /\.(jpg|png)$/i;

    if (!extensionesPermitidas.test(archivo.name)) {
        archivoInput.setCustomValidity('Solo se permiten archivos .jpg o .png.');
        return false;
    }
    if (archivo.size > 500 * 1024) {
        archivoInput.setCustomValidity('El tamaño del archivo no puede ser mayor a 500 KB.');
        return false;
    }

    archivoInput.setCustomValidity('');
    return true;

}

function ConfirmPassword(){
    const new_password = document.getElementById('new_password');
    const confirm_password = document.getElementById('confirm_password');
    
    
    if(confirm_password.value !== new_password.value){
        console.log(confirm_password.value)
        console.log(new_password.value);
        confirm_password.setCustomValidity('Las contraseñas no coinciden');
    } else {
        confirm_password.setCustomValidity('');
    }
}
