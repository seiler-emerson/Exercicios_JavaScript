/*
    Faça um programa que receba o nome e duas notas de vários alunos.
    No final, mostre um boletim contendo a média de cada um e as notas individuais.

*/

let alunos = [
    {
        aluno: 'Maria',
        nota1: 8.5,
        nota2: 6.7
    },
    {
        aluno: 'Claudio',
        nota1: 3.5,
        nota2: 2
    },
    {
        aluno: 'Emerson',
        nota1: 10,
        nota2: 10
    },
    {
        aluno: 'Ana',
        nota1: 7,
        nota2: 10
    }
]

console.log("No   Nome           Nota 1    Nota 2    Média")
console.log("---------------------------------------------")
for(let i = 0; i < alunos.length; i++) {
    let media = (alunos[i].nota1 + alunos[i].nota2)/2
    Object.defineProperty(alunos[i], 'media', {value: media})

    console.log(`${i+1}    ${alunos[i].aluno}${" ".repeat(15 - alunos[i].aluno.length)}${alunos[i].nota1}${" ".repeat(10 - alunos[i].nota1.toString().length)}${alunos[i].nota2}${" ".repeat(10 - alunos[i].nota2.toString().length)}${alunos[i].media}`)
 }

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
