
const chessBoad = (value) => {
    for (let i=0;i<value;i++) {
        let line = ' '
        for (let j=0;j<value;j++) {
            line += (i+j)%2 === 0 ? ' ' : '#'
        }
        console.log(line)
    }
    
}

chessBoad(12)