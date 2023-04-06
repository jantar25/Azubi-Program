let menu = document.querySelector("#menu") 
let navbar = document.querySelector(".navbar")

const toggleMenu = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

menu.addEventListener('click',toggleMenu)
