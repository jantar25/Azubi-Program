let timer = document.querySelector('.timer')
const holes = document.querySelectorAll('.hole')
let lastIndex
let counterDownTimer
let peepTimer


const countDown = () => {
    counterDownTimer = setInterval(() => {
        if(timer.textContent == 0) {
            clearInterval(counterDownTimer)
            return
        }
        timer.textContent -= 1
    },1000)
}

const peep = () => {
    const holeLocation = randomPeep()
    holes[holeLocation].classList.add('up')
    setTimeout(()=> {
        peepTimer = holes[holeLocation].classList.remove('up')
    },1000)
}

const randomPeep = () => {
    let index = Math.floor(Math.random() * holes.length)
    if (lastIndex == index) {
        return randomPeep()
    }
    lastIndex = index
    return index
}