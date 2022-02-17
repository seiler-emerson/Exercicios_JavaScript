/*
    Crie um programa que leia o nome de uma cidade e diga se ela começa ou não com o nome "Santo"
*/

let cidade = "Santo antonio"

cidade = cidade.toLowerCase().split(" ")

if (cidade[0] === "santo") {
    console.log(`A cidade digitada começa com a palavra Santo.`)
} else {
    console.log(`A cidade digitada não começa com a palavra Santo.`)
}
