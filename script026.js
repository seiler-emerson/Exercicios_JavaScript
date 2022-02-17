/*
    Faça um programa que leia uma frase pelo teclado e mostre:
        * Quantas vezes aparece a letra "a".
        * Em que posição ela aparece pela primeira vez.
        * Em que posição ela aparece pela última vez.
*/

let frase = "Carlos nao gosta de abobora"

frase = frase.toLowerCase().split("")


// Quantas vezes aparece a letra "a".
let frase2 = []
for(let i = 0; i <= frase.length ; i++) {
    if(frase[i] === "a") {
        frase2.push(frase[i])
    }
}

let quantidade = frase2.length
console.log(`A letra "a" aparece ${quantidade} vezes na frase.`)


// Em que posição ela aparece pela primeira vez.
let primeiraA = frase.indexOf("a")+1
console.log(`A primeira letra "a" apareceu na posição ${primeiraA}`)

// Em que posição ela aparece pela última vez.

let fraseInversa = frase.reverse()
let ultimoA = (frase.length) - (fraseInversa.indexOf("a"))
console.log(`A ultima letra "a" apareceu na posição ${ultimoA}`)