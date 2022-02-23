/*
    Crie um programa que leia com 10 variaveis que recebam valores numéricos.
    Guarde os valores em um array.
    Depois crie dois arrays, um para os valores pares outro para os valores impares.
    Depois mostre o conteúdo dos 3 arrays

*/

let n1 = 1
let n2 = 4
let n3 = 3
let n4 = 8
let n5 = 10
let n6 = 5
let n7 = 7
let n8 = 2
let n9 = 9
let n10 = 6


let array = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10]
let pares = []
let impares = []

    for(let i =0 ; i < array.length; i++) {
        if (array[i] % 2 === 0){
            pares.push(array[i])
        } else {
            impares.push(array[i])
        }
    }


console.log(`A lista completa é ${array}`)
console.log(`A lista de pares é ${pares}`)
console.log(`A lista de impares é ${impares}`)


