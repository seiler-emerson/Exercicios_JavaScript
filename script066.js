/*
    Escreva um programa que leia vários números inteiros.
    No final da execução mostre a média entre todos os valores e qual
    foi o maior e o menor valor lido. O programa deve perguntar ao usuário
    se ele quer ou não continuar a digitar valores.

*/

let numero = [4,2,8,9, 10]
let qtdNumeros = numero.length
let soma = 0

//MÉDIA

for (let i = 0; i < numero.length; i ++) {
    soma = soma + numero[i]
}
let media = soma / qtdNumeros

// MAIOR
let maior = 0
for (let i = 0; i < numero.length; i ++) {
    if(numero[i] > maior)
    maior = numero[i]
}

// MENOR
let menor = 1
for (let i = 0; i < numero.length; i ++) {
    if(numero[i] < menor)
    menor = numero[i]
}

console.log(`Você digitou ${qtdNumeros} números e a média foi ${media}`)
console.log(`O maior valor foi ${maior} e o menor foi ${menor}.`)



