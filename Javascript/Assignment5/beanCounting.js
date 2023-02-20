const countBs = (string) => {
    const stringLength = string.length
    let countBs=0
    for (let i=0; i<stringLength; i++) {
        if (string[i] === "B"){
            countBs += 1
        }
    }
    return countBs
}
console.log(countBs("Bisimwa"))

const countChar = (string,char) => {
    const stringLength = string.length
    let countChar=0
    for (let i=0; i<stringLength; i++) {
        if (string[i] === char){
            countChar += 1
        }
    }
    return countChar
}

console.log(countChar("Bisimwa",'i'))
