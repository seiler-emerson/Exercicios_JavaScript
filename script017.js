/*
    Faça um programa que leia o comprimento do cateto
    oposto e do cateto adjacente de um triângulo retângulo,
    calcule e mostre o comprimento da hipotenusa.
*/

let catetoOposto = 3.5
let catetoAdjacente = 4.75

let hipotenusa = Math.sqrt((catetoOposto * catetoOposto) + (catetoAdjacente * catetoAdjacente))


console.log(`A hipotenusa do triângulo vai medir ${hipotenusa}`)