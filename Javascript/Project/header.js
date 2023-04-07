let menuBtn = document.querySelector("#menu")
let searchBtn = document.querySelector("#searchBtn") 
let navbar = document.querySelector(".navbar")
let searchForm = document.querySelector(".searchForm")
let toggleSearchBar = false

// Toggle Search Bar
const toggleSearch = () => {
    if(!toggleSearchBar) {
        searchForm.style.display = 'flex';
        toggleSearchBar = true;
    } else {
        searchForm.style.display = 'none';
        toggleSearchBar = false;
    }  
}

// toggle Menu Bar
const toggleMenu = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchForm.style.display = 'none';
    toggleSearchBar = false;
}

menuBtn.addEventListener('click',toggleMenu)
searchBtn.addEventListener('click',toggleSearch)