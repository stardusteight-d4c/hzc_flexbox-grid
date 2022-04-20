const menuButton = document.querySelector('.cabecalho_menu');
const menuLateral = document.querySelector('.menu-lateral');

menuButton.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-lateral--ativo')
})