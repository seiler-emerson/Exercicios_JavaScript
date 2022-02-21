/*
    Desenvolva um programa que leia o
    primeiro termo e a razão de uma Progressão Aritmética.
    No final, mostre os 10 primeiros termos
    dessa progressão.

*/

let primeiroTermo = 0
let razao = 2


for(let i = 0; i < 10; i++) {
    console.log(primeiroTermo)
    primeiroTermo = primeiroTermo + razao
}
console.log("Acabou!")