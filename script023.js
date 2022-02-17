/*
    Faça um programa que leia um número de 0 a 9999 e mostre na tela cada um dos digitos separados.
    Ex: 1834
        unidade: 4
        dezena: 3
        centena: 9
        milhar: 1
*/

let numero = 1834

let unidade = numero.toString().split("")[3]
let dezena = numero.toString().split("")[2]
let centena = numero.toString().split("")[1]
let milhar = numero.toString().split("")[0]

console.log(`Unidade: ${unidade}`)
console.log(`Dezena: ${dezena}`)
console.log(`Centena: ${centena}`)
console.log(`Milhar: ${milhar}`)