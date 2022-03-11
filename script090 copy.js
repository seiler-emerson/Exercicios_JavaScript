/*
    Faça um programa que receba o nome e a média de um aluno.
    E mostre se o aluno está aprovado, em recuperação ou reprovado.
    * Mais que 7 - Aprovado
    * Entre 5 e 6.9 - Recuperação
    * Abaixo de 5 - Reprovado

*/

let alunos = [
    {
        aluno: 'Maria',
        media: 9
    },
    {
        aluno: 'Claudio',
        media: 5.5
    },
    {
        aluno: 'Emerson',
        media: 10
    },
    {
        aluno: 'Ana',
        media: 4.9
    }
]

console.log("No   Nome          Média        Situação")
console.log("---------------------------------------------")
for(let i = 0; i < alunos.length; i++) {
    if (alunos[i].media >= 7) {
        Object.defineProperty(alunos[i], 'situacao', {value: "Aprovado"})
    } else if (alunos[i].media < 7 && alunos[i].media >=5) {
        Object.defineProperty(alunos[i], 'situacao', {value: "Recuperação"})
    } else {
        Object.defineProperty(alunos[i], 'situacao', {value: "Reprovado"})
    }
    

    console.log(`${i+1}    ${alunos[i].aluno}${" ".repeat(15 - alunos[i].aluno.length)}${alunos[i].media}${" ".repeat(12 - alunos[i].media.toString().length)}${alunos[i].situacao}`)
 }

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
