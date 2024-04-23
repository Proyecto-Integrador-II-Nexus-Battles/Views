function toggleVisibility() {
    let eye = document.getElementById('eye');
    let show = document.getElementById('show');
    let new_password = document.getElementById('new_password');

    if (eye && show && new_password) { 
        if (eye.style.display === 'none') {
            eye.style.display = 'inline';
            show.style.display = 'none';
            new_password.type = 'password';
        } else {
            eye.style.display = 'none';
            show.style.display = 'inline';
            new_password.type = 'text';
        }
    } else {
        console.error('No se encontraron elementos necesarios');
    }
}

function toggleVisibility_Conf() {
    let conf_eye = document.getElementById('conf_eye');
    let conf_show = document.getElementById('conf_show');
    let confirm_password = document.getElementById('confirm_password');

    if (conf_eye && conf_show && confirm_password) { 
        if (conf_eye.style.display === 'none') {
            conf_eye.style.display = 'inline';
            conf_show.style.display = 'none';
            confirm_password.type = 'password';
        } else {
            conf_eye.style.display = 'none';
            conf_show.style.display = 'inline';
            confirm_password.type = 'text';
        }
    } else {
        console.error('No se encontraron elementos necesarios');
    }
}

