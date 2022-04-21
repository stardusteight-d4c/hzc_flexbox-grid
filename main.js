const menu_button = document.querySelector('.menu');
const menu_vertical = document.querySelector('.menu_vertical');

menu_button.addEventListener('click', () => {
    menu_vertical.classList.toggle('menu_vertical--ativo');
})
