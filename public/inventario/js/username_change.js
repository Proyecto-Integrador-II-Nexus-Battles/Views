function display_input(){
    let input = document.getElementById('user_input')
    console.log("hola")

    if (input.style.display === 'none' || input.style.display === '') {
        input.style.display = 'block';
    } else {
        input.style.display = 'none';
        input.value="";
    }
}
