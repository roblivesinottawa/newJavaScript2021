fahrenheitToCelsius = (temp) => {
    return (temp - 32) * 5 / 9
}

let converted = fahrenheitToCelsius(32)
let converted2 = fahrenheitToCelsius(68)
console.log(converted)
console.log(converted2)