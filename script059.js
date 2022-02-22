/*
    Crie um programa que leia dois valores, selecione uma operação e mostre o resultado na tela

*/

let numero1 = 51
let numero2 = 8


let somar = false
let multiplicar = false
let maior = true



if(somar === true) {
    console.log(`A soma entre ${numero1} e ${numero2} é ${numero1+numero2}`)
} else if(multiplicar === true) {
    console.log(`A multiplicação entre ${numero1} e ${numero2} é ${numero1*numero2}`)
} else if (maior === true) {
    let maiorNumero
    if(numero1 > numero2) {
        maiorNumero = numero1
    } else {
        maiorNumero = numero2
    }
    console.log(`A multiplicação entre ${numero1} e ${numero2} é ${maiorNumero}`)
}