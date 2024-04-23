function toggleVisibility() {
    let eye = document.getElementById('eye');
    let show = document.getElementById('show');
    let passwordInput = document.getElementById('password');

    if (this.id === 'eye') {
        eye.style.display = 'none';
        show.style.display = 'inline';
        passwordInput.type = 'text';
    } else if (this.id === 'show') {
        eye.style.display = 'inline';
        show.style.display = 'none';
        passwordInput.type = 'password';
    }
}

document.getElementById('eye').addEventListener('click', toggleVisibility);
document.getElementById('show').addEventListener('click', toggleVisibility);
