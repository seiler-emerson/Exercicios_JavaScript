/*
    Crie um programa que leia com 5 variaveis que recebam valores numéricos.
    Guarde os valores em um array.
    No final mostre todos os valores únicos em ordem crescente.

*/

let n1 = 1
let n2 = 4
let n3 = 3
let n4 = 8
let n5 = 10


let array = [n1, n2, n3, n4, n5]

let arrayOrdem = array.sort((a,b) => a - b)

console.log(`Você digitou os valores ${array}`)