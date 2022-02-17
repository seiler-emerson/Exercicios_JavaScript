/*
    Faça um programa que leia o nome completo de uma pessoa,
    mostrando em seguida o primeiro e o último nome separadamente
    Ex: Ana Maria de Souza
    Primeiro: Ana
    Último: Souza
*/

let nomeCompleto = "Ana Maria de Abir Joana da Silva Sauro Souza"

nomeCompleto = nomeCompleto.split(" ")

let primeiroNome = nomeCompleto[0]

console.log(`Primeiro nome: ${primeiroNome}`)

let ultimoNome = nomeCompleto[nomeCompleto.length - 1]

console.log(`Ultimo nome: ${ultimoNome}`)
