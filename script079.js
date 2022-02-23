/*
    Crie um programa que leia com 10 variaveis que recebam valores numéricos.
    Guarde os valores em um array.
    Remova os valores duplicados do array.
    No final mostre todos os valores únicos em ordem crescente.

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

let valores = array.filter(function(este, i) {   //Filtrar números repetidos e exibir uma vez apenas
    return array.indexOf(este) === i;
});

console.log(`Você digitou os valores ${array}`)

console.log(`Os valores filtrados, sem repetição, foram ${valores.sort((a,b) => a - b)}`)  //Ordem crescente