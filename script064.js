/*
    Escreva um programa que leia vários números inteiros.
    No final mostre quantos números foram
    digitados e qual foi a soma entre eles.

*/
let numero = [8,2,1,7]
let qtdNumeros = numero.length
let soma = 0

for (let i = 0; i < numero.length; i ++) {
    soma = soma + numero[i]
}

console.log(`Você digitou ${qtdNumeros} números e a soma entre eles foi ${soma}.`)



