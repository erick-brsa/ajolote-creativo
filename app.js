const btn = document.getElementById('menu-btn')
const menu = document.querySelector('.nav__list')

btn.addEventListener('click', () => {
    menu.classList.toggle('open')
})