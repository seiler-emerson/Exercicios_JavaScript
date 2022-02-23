/*
    Desenvolva um programa que leia o
    primeiro termo e a razão de uma Progressão Aritmética.
    No final, mostre os 10 primeiros termos
    dessa progressão usando a estrutura while.

*/

let primeiroTermo = 2
let razao = 3


let i = 0
while (i < 10) {
    console.log(primeiroTermo)
    primeiroTermo = primeiroTermo + razao
    i++
}
console.log("Acabou!")