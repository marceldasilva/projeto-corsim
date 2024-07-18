const itens = document.querySelector('.itens')

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function mudarTamanho() {
    if (window.innerWidth >= 790) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}