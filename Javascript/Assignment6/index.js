 const A = {name:"glody",age:20}
 const B = {name:"glody",age:20}
 
 const deepEqual = (value1,value2) => {
    if (JSON.stringify(value1) === JSON.stringify(value2)) {
        return true
    }

    return false
 }


 console.log(deepEqual(A,B))