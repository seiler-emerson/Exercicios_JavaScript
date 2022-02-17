/*
    Crie um programa que leia o nome completo de uma pessoa e mostre:
        * O nome com todas as letras maiusculas
        * O nome com todas as letras minusculas
        * Quantas letras ao todo (sem considerar os espaços)
        * Quantas letras tem o primeiro nome
*/

let nomeCompleto = "Emerson Seiler"

let nomeMaiuscula = nomeCompleto.toUpperCase()
let nomeMinuscula = nomeCompleto.toLowerCase()
let numLetrasNome = nomeCompleto.replace(/\s/g, "").length
let primeiroNome = nomeCompleto.split(" ")[0]
let numLetrasPrimeiroNome = primeiroNome.length


console.log(`Seu nome em maiusculas é ${nomeMaiuscula}.`)
console.log(`Seu nome em maiusculas é ${nomeMinuscula}.`)
console.log(`Seu tem ao todo ${numLetrasNome} letras.`)
console.log(`Seu primeiro nome é ${primeiroNome} e ele tem ${numLetrasPrimeiroNome} letras.`)