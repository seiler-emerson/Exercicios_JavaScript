/*
    Escreva um programa que leia dois numeros inteiros e compare-os,
    mostrando na tela uma mensagem.
    * O primeiro valor é maior.
    * O segundo valor é maior.
    * Não existe valor maior, os dois são iguais

*/

let numero1 = 1
let numero2 = 1

if (numero1 > numero2) {
    console.log("O PRIMEIRO valor é maior.")
} else if (numero2 > numero1) {
    console.log("O SEGUNDO valor é maior.")
} else if (numero1 === numero2) {
    console.log("Não existe valor maior, os dois são iguais.")
}