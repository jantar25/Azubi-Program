
const range = (start,end,step) => {
    const array = []
    if (step) {
        for (let i=start;i<=end;i+=step) {
            array.push(i)
        } 
    } else {
        for (let i=start;i<=end;i++){
            array.push(i)
        }
    }

    return array
}

const sum = (array) => {
    let sumation = 0
    for (let i=0;i<array.length;i++) {
        sumation += array[i]
    }

    return sumation
}

console.log(range(1,10,2))
console.log(sum([2,4,5,9,0,-6]))