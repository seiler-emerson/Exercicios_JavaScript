/*
    Escreva um programa que leia um número inteiro qualquer e peça
    para o usuário escolher qual a base de conversão.


*/

let numero = 234

let toBinario = false
let toOctal = true
let toHexadecimal = false

let binario = numero.toString(2)        //toString(2) converte um numero para binario
let octal = numero.toString(8)          //toString(8) converte um numero para octal
let hexadecimal = numero.toString(16)   //toString(16) converte um numero para hexadecimal


if (toBinario) {
    console.log(`O ${numero} convertido para binário é ${binario}`)
} else if (toOctal) {
    console.log(`O ${numero} convertido para octal é ${octal}`)
} else if (toHexadecimal) {
    console.log(`O ${numero} convertido para hexadecimal é ${hexadecimal}`)
}