/*
    Crie um programa que leia duas notas de um aluno e calcule sua média.
    Mostrando uma mensagem no final, de acordo com a média atingida:
    * Média abaixo de 5.0: REPROVADO
    * Média entre 5.0 e 6.9: RECUPERAÇÃO
    * Média 7.0 ou superior: APROVADO

*/

let nota1 = 3
let nota2 = 6.9
let media = (nota1 + nota2) / 2

if (media > 7) {
    console.log(`Tirando ${nota1.toFixed(1)} e ${nota2.toFixed(1)}, a média do aluno é ${media.toFixed(1)}.`)
    console.log(`O aluno está APROVADO`)
} else if (media >= 5 && media <= 6.9) {
    console.log(`Tirando ${nota1.toFixed(1)} e ${nota2.toFixed(1)}, a média do aluno é ${media.toFixed(1)}.`)
    console.log(`O aluno está em RECUPERAÇÃO`)
} else if (media < 5) {
    console.log(`Tirando ${nota1.toFixed(1)} e ${nota2.toFixed(1)}, a média do aluno é ${media.toFixed(1)}.`)
    console.log(`O aluno está REPROVADO`)
}