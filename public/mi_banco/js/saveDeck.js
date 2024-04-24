

function saveDeck() {
    let cartas = []
    const cardsDeck = document.getElementsByClassName('card')
    const token = "Bearer " + localStorage.getItem("token");

    Array.from(cardsDeck).forEach(carta => {
        if (carta.classList.contains('Active') || carta.classList.contains('activeHero')) {
            cartas.push(carta.id)
        }
    });
    if (cartas.length === 31) {
        fetch(`/saveDeck`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${token}`,
            },
            body: JSON.stringify({
                cartas: cartas
            })
        })
            .then( alert('Mazo guadado correctamente', '#2ecc71') )
            .catch(error => {
                console.error('Error al enviar la solicitud:', error);
            });
    } else {
        alert('Necesitas 30 cartas para guardar', 'red')
        console.log('No puede guardar el mazo');
        cartas = []
    }
    console.log(token);
    console.log(cartas);
}

window.onload = function () {
    const token = "Bearer " + localStorage.getItem("token");

    fetch(`/deck`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Iterar sobre cada carta en el arreglo de IDs
            data.forEach(cardId => {
                const carta = document.getElementById(cardId);
                const botonSeleccionar = carta.querySelector('button');

                if (cardId.startsWith('H')) {
                    carta.classList.add('activeHero');
                    botonSeleccionar.innerHTML = 'Tu héroe'
                } else {
                    carta.classList.add('Active');
                    botonSeleccionar.innerHTML = 'Deseleccionar'
                }
            });
            actualizaStats()
        })
        .catch(error => {
            console.error('Error al cargar el mazo:', error);
        });

}

function actualizaStats() {
    const aDeck = document.getElementById('aDeck');
    const wDeck = document.getElementById('wDeck');
    const iDeck = document.getElementById('iDeck');
    const eDeck = document.getElementById('eDeck');
    const TDeck = document.getElementById('totalDeck');
    const currentlyHero = document.getElementById('currentlyHero');

    const cartas = document.getElementsByClassName('card');

    Array.from(cartas).forEach(carta => {
        if (carta.classList.contains('Active')) {
            TDeck.innerHTML = parseInt(TDeck.innerHTML) + 1;

            switch (carta.id.charAt(0)) {
                case 'A':
                    aDeck.innerHTML = parseInt(aDeck.innerHTML) + 1;
                    break;
                case 'W':
                    wDeck.innerHTML = parseInt(wDeck.innerHTML) + 1;
                    break;
                case 'I':
                    iDeck.innerHTML = parseInt(iDeck.innerHTML) + 1;
                    break;
                case 'E':
                    eDeck.innerHTML = parseInt(eDeck.innerHTML) + 1;
                    break;
            }
        } else if (carta.classList.contains('activeHero')) {
            const nombreCartaElemento = carta.querySelector('#nombre p');
            const nombreCarta = nombreCartaElemento.textContent;
            currentlyHero.innerHTML = nombreCarta;
        }
    });
}


function alert(text, color) {
    const modal = document.getElementById("modal-toast");
    const texto = document.getElementById('textoAlerta')
    const toastElement = document.querySelector('.wrapper .toast');

    texto.innerHTML = text
    if (!modal) return;

    toastElement.style.borderLeftColor = `${color}`
    modal.classList.remove("hide");
    modal.style.display = "block";
    modal.classList.add("show");
    setTimeout(() => {
        modal.classList.remove("show");
        modal.classList.add("hide");
    }, 5000);
}