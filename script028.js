/*
    Escreva um programa que faça o computador pensar em um
    número inteiro entra 0 e 5 e peça para o usuário tentar
    descobrir qual foi o número escolhido pelo computador.
    O programa deverá escrever na tela se o usuário venceu
    ou perdeu.
*/

let numeroUsuário = 5

let numeroComputador = (Math.floor(Math.random() * (5) + 1))

if (numeroComputador === numeroUsuário) {
    console.log(`Parabéns, você acertou o número que o computador escolheu! Número: ${numeroComputador}`)
} else {
    console.log(`Que pena, você errou o número que o computador escolheu! NúmeroComputador: ${numeroComputador}, seu número: ${numeroUsuário}`)
}