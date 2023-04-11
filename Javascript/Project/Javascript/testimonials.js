const glody = './Assets/glody.jpg'
const jemy = './Assets/jemy.jpg'
const chris = './Assets/chris.jpg'
const testimonialsContainer = document.querySelector('.testimonials')


const testimonials = [
    {
        id:1,
        ownerNames:'Chris Evans',
        stars:4,
        description:"The best thing is their delivery speed, the 2 hours is not a scam.",
        image:chris
    },
    {
        id:2,
        ownerNames:'Jemmy Bella',
        stars:3,
        description:"The best food and tasty one in the region,what a Yummy?.",
        image:jemy
    },
    {
        id:3,
        ownerNames:'Glody Jantar',
        stars:5,
        description:"Clean food with coocked with organic groceries, very tasty and healthier.",
        image:glody
    },
    {
        id:4,
        ownerNames:'Glody Jantar',
        stars:5,
        description:"Clean food with coocked with organic groceries, very tasty and healthier.",
        image:glody
    }
]

const displayStars = (starNumber) => {
    let stars = "";
    for (let i=0; i < starNumber; i++) {
        stars +='<i class="fas fa-star"></i>' 
    }
    return stars
}

testimonialsContainer.innerHTML = testimonials.map(testimony => `
    <div class="testimony">
        <div class="doublequotes">
            <i class="fa-solid fa-quote-left"></i>
        </div>
        <div class="testimony-header">
            <img src=${testimony.image} alt=${testimony.ownerNames} />
            <div class='title'>
                <h4>${testimony.ownerNames}</h4>
                <div class="stars">${displayStars(testimony.stars)}</div>
            </div>
        </div>
        <p>${testimony.description}</p>
    </div>
`).join('')