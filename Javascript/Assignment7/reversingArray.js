
const reverseArray = (array) => {
    const arayLenght = array.length
    let reversedArray = []
    for (let i=arayLenght-1; i>=0;i--) {
        reversedArray.push(array[i])
    }

    return reversedArray
}

console.log(reverseArray(['A','B','C','D','E','F']))

const reverseArrayInPlace = ( array ) => {
    for( let i = 0; i < Math.floor( array.length/2 ); i++ ) {
      let temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
    return array;
  }

  console.log(reverseArrayInPlace([1,2,3,4,5,6]))