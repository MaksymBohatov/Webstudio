const btnCloseModal = document.querySelector('.icon-close-box')
const burgerMenu = document.querySelector('.burger-menu')
const btnCloseBurgerMenu = document.querySelector('.icon-close-burger-menu')
const btnOpenBurgerMenu = document.querySelector('.solid_menu')

btnCloseModal.addEventListener('click', event => {
	modalOverlay.classList.remove('is-open')
})
btnOpenBurgerMenu.addEventListener('click', event => {
	burgerMenu.classList.add('is-open')
})
btnCloseBurgerMenu.addEventListener('click', event => {
	burgerMenu.classList.remove('is-open')
})