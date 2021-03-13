convertFarenheit = (fahrenheit) => {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}

let temp = convertFarenheit(100)
console.log(temp)
// console.log(temp.celsius)
// console.log(temp.kelvin)