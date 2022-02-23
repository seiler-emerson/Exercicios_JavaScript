/*
    Crie um programa leia com 5 variaveis que recebam valores numéricos diferentes.
    Guarde os valores em um array.
    No final mostre qual foi o maior e o menor valor digitado e as suas
    respectivas posições no array.

*/

let n1 = 1
let n2 = 4
let n3 = 3
let n4 = 8
let n5 = 10


let array = [n1, n2, n3, n4, n5]

console.log(`Você digitou os valores ${array}`)

let maior = 0
let posicaoMaior = 0
let menor = 100
let posicaoMenor = 0

for(let i = 0; i < array.length; i++) {
    if(array[i] > maior) {
        maior = array[i]
        posicaoMaior = array.indexOf(array[i]) +1

    }
    if(array[i] < menor) {
        menor = array[i]
        posicaoMenor = array.indexOf(array[i]) +1
    }
}
console.log(`O maior valor digitado foi ${maior} na posição ${posicaoMaior}`)
console.log(`O menor valor digitado foi ${menor} na posição ${posicaoMenor}`)