/*
    Crie um programa que leia um array de 4 números e mostre:
    * Quantas vezes apareceu o valor 9.
    * Em que posição foi digitado o primeiro valor 3.
    * Quais foram os números pares.

*/

let array = [9,3,2,9,4,6,8]

// Quantas vezes apareceu o valor 9.
let noveCont = 0
for(let i = 0; i < array.length; i++) {
    if(array[i] === 9) {
        noveCont += 1
    }
}
console.log(`O valor 9 apareceu ${noveCont} vezes.`)

// Em que posição foi digitado o primeiro valor 3.

let posicaoTres = array.indexOf(3)
console.log(`O primeiro valor 3 apareceu na ${posicaoTres+1}ª posição.`)


// Quais foram os números pares.
let par = []
for(let i = 0; i < array.length; i++) {
    if((array[i] % 2) ===0)  {
        par.push(array[i])
    }
}
console.log(`Os valores pares digitados foram: ${par}`)