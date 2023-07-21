const celsiusToFahrenheit = function (celsius) {
    const cTemp = celsius;
    const toFahr = cTemp * (9/5) + 32;
    const msg = `${cTemp} \xB0C is ${toFahr} \xB0F`
    return msg;
}

console.log(celsiusToFahrenheit(60));

const fahrenheitToCelsius = function (fahrenheit) {
    const fTemp = fahrenheit;
    const toCel = (fTemp - 32) * (5 / 9);
    const msg = `${fTemp} \xB0F is ${toCel} \xB0C`
    return msg;
}

console.log(fahrenheitToCelsius(45));