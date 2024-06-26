function LimitarCaracteres(event) {
    const inputValue = event.target.value;
    const regex = /^[a-zA-Z\u00C0-\u024F\s]+$/;

    if (!regex.test(inputValue)) {
        event.target.setCustomValidity("Este campo no puede contener números ni caracteres especiales");
        return false;
    } else {
        event.target.setCustomValidity("");
        return true;
    }
}


function ValidarContrasena() {
    const password = document.getElementById('password');
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;

    if (!regex.test(password.value)) {
        if (!/(?=.*[a-z])/.test(password.value)) {
            password.setCustomValidity("La contraseña debe contener al menos un miniscula.");
        } else if (!/(?=.*[A-Z])/.test(password.value)) {
            password.setCustomValidity("La contraseña debe contener al menos una mayúscula.");
        } else if (!/(?=.*\d)/.test(password.value)) {
            password.setCustomValidity("La contraseña debe contener al menos un numero.");
        } else if (!/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(password.value)) {
            password.setCustomValidity("La contraseña debe contener al menos un carácter especial ($@$!%*?&).");
        }
        return false;
    } else {
        password.setCustomValidity("");
        return true;
    }
}

function LimitarNumeros(event) {
    const inputValue = event.key;
    const isCtrlPressed = event.ctrlKey || event.metaKey;

    if (inputValue === "Backspace" || isCtrlPressed || /^[0-9]+$/.test(inputValue)) {
        return true;
    } else {
        event.preventDefault();
    }
}


function ValidarArchivo() {
    const archivoInput = document.getElementById('avatar');
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

function ValidarFecha() {
    const FechaExp = document.getElementById('fecha_exp').value;
    const FechaAct = new Date();

    const [year, month] = FechaExp.split('-');
    const fechaVencimiento = new Date(parseInt(year), parseInt(month) - 1);

    if (fechaVencimiento <= FechaAct) {
        document.getElementById('fecha_exp').setCustomValidity('No puede ser una fecha menor o igual a la actual');
    } else {
        document.getElementById('fecha_exp').setCustomValidity('');
    }
}

function ValidarNombreUsuario() {
    const inputUsuario = document.getElementById('username')
    fetch('manejo_usuarios/ApodosInhabilitados.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let flag = false;
            let value = inputUsuario.value.replace(/\s/g, "").toLowerCase();
            data.forEach(function (nombre) {
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
        .catch(function (error) {
            console.error('Error al cargar el JSON:', error);
        });
}

function validarTarjetaVisa() {
    const numeroTarjeta = document.getElementById('numero_tarjeta').value.replace(/\s/g, "");

    if (!numeroTarjeta.startsWith("4")) {
        document.getElementById('numero_tarjeta').setCustomValidity("El número de tarjeta Visa ingresado es inválido");
        return;
    }

    if (numeroTarjeta.length !== 13 && numeroTarjeta.length !== 16) {
        document.getElementById('numero_tarjeta').setCustomValidity("El número de tarjeta Visa ingresado es inválido");
        return;
    }

    let suma = 0;
    let longitudPar = numeroTarjeta.length % 2 === 0;

    for (let i = 0; i < numeroTarjeta.length; i++) {
        let digito = parseInt(numeroTarjeta.charAt(i));

        if (i % 2 === (longitudPar ? 0 : 1)) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }
        suma += digito;
    }

    if (suma % 10 !== 0){
        document.getElementById('numero_tarjeta').setCustomValidity("El número de tarjeta Visa ingresado es inválido");
    } else {
        document.getElementById('numero_tarjeta').setCustomValidity("");
    }
}




