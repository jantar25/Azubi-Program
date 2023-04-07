let menuBtn = document.querySelector("#menu")
let searchBtn = document.querySelector("#searchBtn") 
let navbar = document.querySelector(".navbar")
let searchForm = document.querySelector("#searchForm")

const toggleSearch = () => {
    searchForm.classList.toggle('active');
    console.log('click')
}
const toggleMenu = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}
menuBtn.addEventListener('click',toggleMenu)
searchBtn.addEventListener('click',toggleSearch)