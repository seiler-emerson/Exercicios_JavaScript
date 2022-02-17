/*
    Crie um programa que leia um número inteiro
    e mostre na tela se ele é PAR ou IMPAR.
*/

let numero = 6

let verNumero = numero % 2

if (verNumero === 0) {
    console.log(`O número ${numero} é um númer PAR!`)
} else {
    console.log(`O número ${numero} é um númer IMPAR!`)
}
