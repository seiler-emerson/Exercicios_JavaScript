/*
    Desenvolva um programa que leia seis numeros inteiros
    e mostre a soma apenas daqueles que forem pares.
    Se o valor digitado for impar, desconsidere-o

*/

let soma = 0
let numero1 = 1
let numero2 = 2
let numero3 = 1
let numero4 = 1
let numero5 = 1
let numero6 = 1


if(numero1 % 2 === 0) {
    soma = soma + numero1
}
if(numero2 % 2 === 0) {
    soma = soma + numero2
}
if(numero3 % 2 === 0) {
    soma = soma + numero3
}
if(numero4 % 2 === 0) {
    soma = soma + numero4
}
if(numero5 % 2 === 0) {
    soma = soma + numero5
}
if(numero6 % 2 === 0) {
    soma = soma + numero6
}

console.log(soma)