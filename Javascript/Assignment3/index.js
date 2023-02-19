 console.log(!(true && false))


const triangleArea = (base,height) => {
    return (base*height)/2
}
console.log(triangleArea(3,6))

const incrementNumber = (number) => {
    return number+=1
}
console.log(incrementNumber(7))

const numberComparison = (numberA,numberB) => {
    const sum = numberA+numberB;
    if (sum<=100) return true 
    return false
}

console.log(numberComparison(70,90))

const andLogic = (a,b) =>{
    if (a === false) {
        return false
    } else if (b === false) {
        return false
    } else return true
}

console.log(andLogic(true,true))


const booleanToString = (flag) => {
    return flag.toString()
}
console.log(typeof(booleanToString(false)))

const names = (firstName,lastName) => {
    return lastName +" "+ firstName
}
console.log(names('Jantar','Glody'))