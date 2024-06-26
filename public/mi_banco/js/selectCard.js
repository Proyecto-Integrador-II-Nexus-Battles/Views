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

    const cartasHeroe = document.getElementsByClassName('card');
    Array.from(cartasHeroe).forEach(carta => {
        const botonSeleccionar = carta.querySelector('button');
    
        if (carta.classList.contains('activeHero')) {
            botonSeleccionar.textContent = 'Tu héroe';
        } else {
            if (carta.classList.contains('Active')) {

            }else {
                botonSeleccionar.textContent = 'Seleccionar';
            }
        }
    });
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

        // Cambiar el texto del botón dentro de la carta
        const botonSeleccionar = carta.querySelector('button');
        if (carta.classList.contains('Active')) {
            botonSeleccionar.textContent = 'Deseleccionar';
        } else {
            botonSeleccionar.textContent = 'Seleccionar';
        }
    };

    switch(tipoCarta) {
        case 'Armor':
            if(aDeck.innerHTML === '1' && !carta.classList.contains('Active')){
                alert('Ya excediste el límite de armaduras', 'orange');
                break;
            }
            actualizarCarta(aDeck, !carta.classList.contains('Active'));
            break;
        case 'Weapon':
            if(wDeck.innerHTML === '2' && !carta.classList.contains('Active')){
                alert('Ya excediste el límite de armas', 'orange');
                break;
            }
            actualizarCarta(wDeck, !carta.classList.contains('Active'));
            break;
        case 'Item':
            if(iDeck.innerHTML === '1' && !carta.classList.contains('Active')){
                alert('Ya excediste el límite de Items', 'orange');
                break;
            }
            actualizarCarta(iDeck, !carta.classList.contains('Active'));
            break;
        case 'Talent':
            if(eDeck.innerHTML === '6' && !carta.classList.contains('Active')){
                alert('Ya excediste el límite de Talentos', 'orange');
                break;
            }
            actualizarCarta(eDeck, !carta.classList.contains('Active'));
            break;
    }
}

