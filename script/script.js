const material = document.querySelector('.material-icons')
function click() {
    document.addEventListener('click', (e) => {
        const el = e.target

        if (el.classList.contains('material-icons')) {
            if (itens.style.display == 'block') {
                itens.style.display = 'none'
                material.innerHTML = 'menu'
                material.style.color = 'black'
                material.style.background = '#ffae42'

            } else {
                itens.style.display = 'block'
                material.style.color = '#ffae42'
                material.style.background = 'black'
                material.style.border = '1px solid #ffae42'
                material.innerHTML = 'close'

            }
        }

        if (el.classList.contains('shop')) {
            alert('Página em desenvolvimento')
        }
    })
}

function tela() {
    window.addEventListener('resize', (e) => {
        if (window.innerWidth >= 768) {
            itens.style.display = 'block'
        } else {
            itens.style.display = 'none'
        }
    })
}
tela()
click()

