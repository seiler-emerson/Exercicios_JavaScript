/*
    Escreva um programa que pergunte a quantidade de km percorridos
    por um carro alugado e a quantidade de dias pelos quais ele foi
    alugado. Calcule o preço a pagar, sabendo que o carro custa R$60
    por dia e R$0,15 por km rodado.
*/

let diasAlugados = 8
let kmRodados = 720


let totalPagar = (diasAlugados * 60) + (kmRodados * 0.15)
console.log(`O total a pagar é de R$${totalPagar.toFixed(2)}`)