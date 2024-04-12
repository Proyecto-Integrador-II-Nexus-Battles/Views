function seleccionarHeroe(nombreCarta, idCarta) {
    const currentlyHero = document.getElementById('currentlyHero');
    currentlyHero.innerHTML = nombreCarta;

    const carta = document.getElementById(idCarta);
    const otrasCartas = document.getElementsByClassName('activeHero');

    // Elimina la clase 'activeHero' de todas las cartas
    Array.from(otrasCartas).forEach(e => {
        e.classList.remove('activeHero');
    });

    // Agrega la clase 'activeHero' a la carta seleccionada
    carta.classList.add('activeHero');
}
function seleccionarCarta(tipoCarta, idCarta) {
    const aDeck = document.getElementById('aDeck');
    const wDeck = document.getElementById('wDeck'); 
    const iDeck = document.getElementById('iDeck');
    const eDeck = document.getElementById('eDeck');
    const TDeck = document.getElementById('totalDeck');

    const carta = document.getElementById(idCarta);

    const actualizarCarta = (deckElement, isAdding) => {
        const currentValue = parseInt(deckElement.innerHTML);
        if (isAdding) {
            deckElement.innerHTML = currentValue + 1;
            TDeck.innerHTML = parseInt(TDeck.innerHTML) + 1;
            carta.classList.add('Active');
        } else {
            deckElement.innerHTML = currentValue - 1;
            TDeck.innerHTML = parseInt(TDeck.innerHTML) - 1;
            carta.classList.remove('Active');
        }
    };

    switch(tipoCarta) {
        case 'Armor':
            actualizarCarta(aDeck, !carta.classList.contains('Active'));
            break;
        case 'Weapon':
            actualizarCarta(wDeck, !carta.classList.contains('Active'));
            break;
        case 'Item':
            actualizarCarta(iDeck, !carta.classList.contains('Active'));
            break;
        case 'Talent':
            actualizarCarta(eDeck, !carta.classList.contains('Active'));
            break;
    }
}

