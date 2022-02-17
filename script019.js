/*
    Um professor quer sortear um dos seus quatro alunos para apagar quadro.
    Faça um programa que ajude ele, lendo o nome deles e escrevendo o nome
    do escolhido.
*/

let alunos = ['Paulo', 'Ana', 'Pedro', 'Maria']

let numero = (Math.floor(Math.random() * (4 - 0) + 0))
let escolhido = alunos[numero]

console.log(`O escolhido foi ${escolhido}.`)