/*
    Faça um programa que jogue par ou impar com o computador.

*/
let numeroPessoa = 10
let escolhaPessoa = "impar"

let numeroComputador = (Math.floor(Math.random() * (10 - 0) + 0))

let numFinal = numeroComputador + numeroPessoa
let parImpar = numFinal % 2

console.log(`O jogador escolheu ${numeroPessoa}`)
console.log(`O computador escolheu ${numeroComputador}`)



if (parImpar === 0) {
    console.log("Deu PAR")
    if(escolhaPessoa === "par") {
        console.log("Você ganhou!")
    } else {
        console.log("Computador ganhou!")
    }
} else {
    console.log("Deu IMPAR")
    if(escolhaPessoa === "impar") {
        console.log("Você ganhou!")
    } else {
        console.log("Computador ganhou!")
    }
}