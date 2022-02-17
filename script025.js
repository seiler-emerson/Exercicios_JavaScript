/*
    Crie um programa que leia o nome de uma pessoa e diga se ela tem silva no nome
*/

let nome = "Emerson Silva Seiler"

nome = nome.toLowerCase().split(" ")
console.log(nome)

if (nome.indexOf("silva") >= 0) {
    console.log(`O nome digitado contém Silva.`)
} else {
    console.log(`O nome digitado não contém Silva.`)
}