//JavaScript program to find the area of a triangle
const triangleArea = (sideA,sideB,sideC) => {
    //Semi-perimeter of the triangle 
    const s = (sideA+sideB+sideC)/2
    // Area of the given triangle
    const area = Math.sqrt(s*(s - sideA)*(s - sideB)*(s - sideC))
    return area
}
console.log(triangleArea(5,6,7))


//JavaScript program to calculate the multiplication and division of two numbers
const multiAndDivision = (numberA,numberB,operation) => {
    if (operation === 'multiplication') {
        return numberA * numberB
    } else if (operation === 'division') {
        return numberA/numberB
    } else return 'Can not perform such operation'
}

console.log(multiAndDivision(8,4,'multiplication'))


//JavaScript program to convert temperatures to and from Celsius and Fahrenheit
const convertTemperature = (celsius,fahrenheit) => {
    const celsiusToFahrenheit = (9*celsius+160)/5
    const fahrenheitToCelsius = (5*fahrenheit-160)/9

    return `${celsius}°C is ${celsiusToFahrenheit}°F and ${fahrenheit}°F is ${fahrenheitToCelsius}°C`
}

console.log(convertTemperature(60,45))