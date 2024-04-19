function saveDeck() {
    let cartas = []
    const cardsDeck = document.getElementsByClassName('card')
    const token = "Bearer " + localStorage.getItem("token");

    Array.from(cardsDeck).forEach(carta => {
        if(carta.classList.contains('Active')) {
            cartas.push(carta.id)
        }
    });
    if(cartas.length === 10) {
        console.log('Puede guardar el mazo');
    } else {
        console.log('No puede guardar el mazo');
        cartas = []
    }
    console.log(token);
    console.log(cartas);
}