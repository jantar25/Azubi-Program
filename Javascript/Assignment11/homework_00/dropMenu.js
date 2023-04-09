const dropdownMenu = document.querySelector('.dropdownMenu');
const button = document.querySelector('#button');
const arrow1 = document.querySelector('.arrow1')
const arrow2 = document.querySelector('.arrow2')

const toggleDropdown = () => {
    dropdownMenu.classList.toggle("show");
    arrow1.classList.toggle("hide");
    arrow2.classList.toggle("show");
  };

button.addEventListener('click',toggleDropdown)