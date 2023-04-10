const burger = './Assets/burger.jpg'
const dishesContainer = document.querySelector('.dishes')


const dishes = [
    {
        id:1,
        iconImage:burger,
        title:'Tasty Burger',
        description:'simply and double burger sandwich consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll',
        image:burger
    },
    {
        id:2,
        iconImage:burger,
        title:'Tasty Burger',
        description:'simply and double burger sandwich consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll',
        image:burger
    }
]

dishesContainer.innerHTML = dishes.map(dish => `
    <div class="dish">
        <img src=${dish.iconImage} alt=${dish.title} />
        <h2>${dish.title}</h2>
        <p>${dish.description}</p>
    </div>
`).join('')