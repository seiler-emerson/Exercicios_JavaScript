/*
    Desenvolva um programa que leia um
    número inteiro e diga se ele é
    ou não um número primo.

*/

let num = 6
let qtdNumerosDivisiveis = 0
for (let i = 1; i <=num; i++) {
    if(num % i === 0) {
        qtdNumerosDivisiveis = qtdNumerosDivisiveis + 1
    }
}

if (qtdNumerosDivisiveis === 2) {
    console.log(`O número ${num} é PRIMO.`)
} else {
    console.log(`O número ${num} NÃO É PRIMO.`)
}