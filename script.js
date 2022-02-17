/*
    Faça um programa que leia uma frase pelo teclado e mostre:
        * Quantas vezes aparece a letra "a".
        * Em que posição ela aparece pela primeira vez.
        * Em que posição ela aparece pela última vez.
*/

let frase = "Amanda ama pedro"

frase = frase.toLowerCase().split("")

let primeiraA = frase.indexOf("a")+1
let a = 0
let contador

// while( a < frase.length) {
    for(let i = 0; i < frase.length; i++) {
        if (frase[i] === 'a') {
            console.log(frase[i])
            contador += 1
        }
    }
}
console.log(frase)




console.log(`A primeira letra "a" apareceu na posição ${primeiraA}`)