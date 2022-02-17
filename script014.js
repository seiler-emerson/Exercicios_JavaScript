/*
    Escreva um programa que convertar uma temperatura digitada em
    Cº e converta para Fº
*/

let temperature = 28.45

let temperatureCelsius = ((temperature - 32) * (5/9)).toFixed(2)

console.log(`A temperatura em Celsius é ${temperatureCelsius}°C`)
