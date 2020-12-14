const openMenu = document.querySelector('.menuClick')
const mainMenu = document.querySelector('.nav-list')

openMenu.addEventListener('click', show);

function show() {
    if (mainMenu.style.display === 'none') {
        mainMenu.style.display = 'flex'
        openMenu.style.marginTop = '0px'
    } else {
        mainMenu.style.display = 'none';
        openMenu.style.marginTop = '30px'
    }
}