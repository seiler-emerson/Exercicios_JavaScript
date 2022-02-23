/*
    Escreva um programa que simule o funcionamento de um caixa
    eletrônico.
    * Receba o valor a ser sacado.
    * Quantas cédulas de cada valor serpa entregue
    * Considere que o caixa possui cédulas de R$50, R$20, R$10 e R$1

*/

let valor = 4733
let cedula50
let cedula20
let cedula10
let cedula1


// CEDULAS R$50,00
if((valor / 50 >= 1)) {
    cedula50 = Math.floor(valor / 50)
}
let valor50 = cedula50 * 50

// CEDULAS R$20,00
if (valor - (valor50) >= 20) {
    cedula20 = Math.floor((valor - valor50) / 20)
} else {
    cedula20 = 0
}
let valor20 = cedula20 * 20

// CEDULAS R$10,00
if (valor - (valor50 + valor20) >= 10 ) {
    cedula10 = Math.floor((valor - (valor50 + valor20)) / 10)
}else {
    cedula10 = 0
}
let valor10 = cedula10 * 10

// CEDULAS R$1,00
if (valor - (valor50 + valor20 + valor10) >= 1){
    cedula1 = Math.floor((valor - (valor50 + valor20 + valor10)) / 1)
} else {
    cedula1 = 0
}
let valor1 = cedula1 * 1


// RESULTADO
console.log("=================================")
console.log("==========    BANCO    ==========")
console.log("=================================")

if (cedula50 >= 1) {
    console.log(`Total de ${cedula50} cédulas de R$50,00`)
}
if(cedula20 >= 1) {
    console.log(`Total de ${cedula20} cédulas de R$20,00`)
}
if(cedula10 >= 1) {
    console.log(`Total de ${cedula10} cédulas de R$10,00`)
}
if(cedula1 >= 1) {
    console.log(`Total de ${cedula1} cédulas de R$1,00`)
}

console.log("=================================")
console.log("=================================")