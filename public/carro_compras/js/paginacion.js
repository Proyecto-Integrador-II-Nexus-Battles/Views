let thisPage = 1;
let limit = 6;

function loadItem(){
    let list = document.querySelectorAll('.list .item');
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;

    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    listPage();
}

loadItem();

function listPage(){
    let list = document.querySelectorAll('.list .item');
    let count = Math.ceil(list.length / limit);
    let listPageContainer = document.querySelector('.listPage');
    listPageContainer.innerHTML = '';

    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        listPageContainer.appendChild(prev);
    }

    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        listPageContainer.appendChild(newPage);
    }

    if(thisPage != count){
        let next = document.createElement('li');
        next.innerText = 'NEXT';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        listPageContainer.appendChild(next);
    }

    // Verificar si la última página está vacía y eliminarla si es necesario
    if (list.length % limit !== 0 && thisPage === count + 1) {
        thisPage--;
        loadItem();
    }
}

function changePage(i){
    thisPage = i;
    loadItem();
}


