const burger = './Assets/burger.jpg'
const menuContainer = document.querySelector('.menu')

const MenuItems = [
    {
        id:1,
        image:burger,
        title: 'Simple Burger',
        description:'One row of beef steak,cheese, salad tometoe and mayonaise',
        price: 7000
    },
    {
        id:2,
        image:burger,
        title: 'Simple Burger',
        description:'One row of beef steak,cheese, salad tometoe and mayonaise',
        price: 7000
    },
    {
        id:3,
        image:burger,
        title: 'Simple Burger',
        description:'One row of beef steak,cheese, salad tometoe and mayonaise',
        price: 7000
    },
    {
        id:3,
        image:burger,
        title: 'Simple Burger',
        description:'One row of beef steak,cheese, salad tometoe and mayonaise',
        price: 7000
    }
]

menuContainer.innerHTML = MenuItems.map(item => `
    <div class="menu-item">
        <img src=${item.image} alt=${item.title} />
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <div class='price-container'>
            <button>Add to Cart</button>
            <p>$ ${item.price}</p>
        </div>
    </div>
`).join('')