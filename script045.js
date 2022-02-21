/*
    Crie um programa que faça o computador jogar Jokenpô com você

*/

let suaEscolha = `TESOURA`

let alunos = ['PEDRA', 'PAPEL', 'TESOURA']
let numero = (Math.floor(Math.random() * (3 - 0) + 0))
let escolhaComputador = alunos[numero]


if (suaEscolha === `PEDRA` && escolhaComputador === `PEDRA`) {
    console.log(`O Computador escolheu ${escolhaComputador}.`)
    console.log(`Você escolheu ${suaEscolha}.`)
    console.log(`HOUVE EMPATE!`)
} else if (suaEscolha === `PEDRA` && escolhaComputador === `PAPEL`) {
    console.log(`O Computador escolheu ${escolhaComputador}.`)
    console.log(`Você escolheu ${suaEscolha}.`)
    console.log(`COMPUTADOR GANHOU!`)
}else if (suaEscolha === `PAPEL` && escolhaComputador === `PEDRA`) {
    console.log(`O Computador escolheu ${escolhaComputador}.`)
    console.log(`Você escolheu ${suaEscolha}.`)
    console.log(`VOCÊ GANHOU!`)
} else if (suaEscolha === `PEDRA` && escolhaComputador === `TESOURA`) {
    console.log(`O Computador escolheu ${escolhaComputador}.`)
    console.log(`Você escolheu ${suaEscolha}.`)
    console.log(`VOCÊ GANHOU!`)
} else if (suaEscolha === `TESOURA` && escolhaComputador === `PEDRA`) {
    console.log(`O Computador escolheu ${escolhaComputador}.`)
    console.log(`Você escolheu ${suaEscolha}.`)
    console.log(`COMPUTADOR GANHOU!`)
} else if (suaEscolha === `PAPEL` && escolhaComputador === `TESOURA`) {
    console.log(`O Computador escolheu ${escolhaComputador}.`)
    console.log(`Você escolheu ${suaEscolha}.`)
    console.log(`COMPUTADOR GANHOU!`)
} else if (suaEscolha === `TESOURA` && escolhaComputador === `PAPEL`) {
    console.log(`O Computador escolheu ${escolhaComputador}.`)
    console.log(`Você escolheu ${suaEscolha}.`)
    console.log(`VOCÊ GANHOU!`)
} else if (suaEscolha === `TESOURA` && escolhaComputador === `TESOURA`) {
    console.log(`O Computador escolheu ${escolhaComputador}.`)
    console.log(`Você escolheu ${suaEscolha}.`)
    console.log(`HOUVE EMPATE!`)
} else if (suaEscolha === `PAPEL` && escolhaComputador === `PAPEL`) {
    console.log(`O Computador escolheu ${escolhaComputador}.`)
    console.log(`Você escolheu ${suaEscolha}.`)
    console.log(`HOUVE EMPATE!`)
}

