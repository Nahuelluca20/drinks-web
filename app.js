const openMenu = document.querySelector('.menuClick')
const mainMenu = document.querySelector('.nav-list')

openMenu.addEventListener('click', show);

function show() {
    if (mainMenu.style.display === 'none') {
        mainMenu.style.display = 'block'
    } else {
        mainMenu.style.display = 'none'
    }
}
