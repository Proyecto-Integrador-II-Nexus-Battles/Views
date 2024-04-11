let thisPage = 1;
let limit = 6;
let maxPagesToShow = 5; // Número máximo de páginas para mostrar

function loadItem() {
    let list = document.querySelectorAll('.list .item');
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;

    list.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    listPage();
}

loadItem();

function listPage() {
    let list = document.querySelectorAll('.list .item');
    let count = Math.ceil(list.length / limit);
    let listPageContainer = document.querySelector('.listPage');
    listPageContainer.innerHTML = '';

    let startPage, endPage;

    // Calcular el rango de páginas a mostrar
    if (count <= maxPagesToShow) { // Si hay 5 o menos páginas, mostrar todas
        startPage = 1;
        endPage = count;
    } else {
        if (thisPage <= Math.ceil(maxPagesToShow / 2)) { // Si la página actual está en las primeras páginas
            startPage = 1;
            endPage = maxPagesToShow;
        } else if (thisPage >= count - Math.floor(maxPagesToShow / 2)) { // Si la página actual está en las últimas páginas
            startPage = count - maxPagesToShow + 1;
            endPage = count;
        } else { // Si la página actual está en el medio
            startPage = thisPage - Math.floor(maxPagesToShow / 2);
            endPage = thisPage + Math.ceil(maxPagesToShow / 2) - 1;
        }
    }

    // Agregar botón 'PREV' si no estamos en la primera página
    if (thisPage != 1) {
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        listPageContainer.appendChild(prev);
    }

    // Agregar botones de página
    for (let i = startPage; i <= endPage; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if (i == thisPage) {
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        listPageContainer.appendChild(newPage);
    }

    // Agregar botón 'NEXT' si no estamos en la última página
    if (thisPage != count) {
        let next = document.createElement('li');
        next.innerText = 'NEXT';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        listPageContainer.appendChild(next);
    }
}

function changePage(i) {
    thisPage = i;
    loadItem();
}
