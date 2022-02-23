/*
    Crie um programa que leia com 10 variaveis que recebam valores numéricos.
    Guarde os valores em um array.
    Mostre na tela:
    * Quantos números foram digitados
    * A lista de valores, ordenada de forma decrescente
    * Se o valor 5 foi digitado.

*/

let n1 = 1
let n2 = 4
let n3 = 3
let n4 = 8
let n5 = 10
let n6 = 5
let n7 = 1
let n8 = 2
let n9 = 1
let n10 = 6


let array = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10]

function temCinco(array) {
    for(let i =0 ; i < array.length; i++) {
        if (array[i] === 5){
            console.log(`O valor 5 faz parte da lista e está na posição ${array.indexOf(array[i])+1}!`)
        }
    }
}
//Ordem decrescente
let arrayOrdem = array.sort((a,b) => b - a)

console.log(`Você digitou ${array.length} números.`)
console.log(`Os valores em ordem decrescente são ${arrayOrdem}`)
temCinco(array) 

