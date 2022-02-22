/*
    Crie um programa que leia o peso de cinco pessoas.
    No final, mostre qual foi o maior e o menor peso lidos.

*/

let pesoPessoas = [85.6, 90.2, 45.9, 170.7, 65.5]
let pesoMenor = 1000
let pesoMaior = 0

for(let i = 0; i < pesoPessoas.length; i++) {
    if (pesoPessoas[i] > pesoMaior) {
        pesoMaior = pesoPessoas[i]
    }
    if (pesoPessoas[i] < pesoMenor) {
        pesoMenor = pesoPessoas[i]
    }
}

console.log(`O maior peso lido foi de ${pesoMaior}Kg`)
console.log(`O menor peso lido foi de ${pesoMenor}Kg`)