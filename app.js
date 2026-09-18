//let celsius = prompt("Ingresa la temperatura en grados Celsius");
/* Grados celsius a Kelvin */
const kelvin = 273.15;
const fahrenheit = 1.8;

//let converkelvin = celsius + kelvin;
//let converFahrenheit = (celsius * fahrenheit) + 32;

//console.log(converkelvin);
//console.log(converFahrenheit);

const formGradoCelsius = document.querySelector("#formGradoCelsius");
const resultKelvin = document.querySelector("#resultKelvin");
const resultFahrenheit = document.querySelector("#resultFahrenheit");


/* Obtener los datos del formulario */
formGradoCelsius.addEventListener("submit", (event => {
    // Evita que la página se recargue al presionar un botón submit.
    event.preventDefault();

    let inputGradoCelsius = document.querySelector("#inputGradoCelsius");

    let celsius = Number(inputGradoCelsius.value);
    let converkelvin = celsius + kelvin;
    let converFahrenheit = (celsius * fahrenheit) + 32;

    resultKelvin.value = converkelvin;
    resultFahrenheit.value = converFahrenheit;


}));
