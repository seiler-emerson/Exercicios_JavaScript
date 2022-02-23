/*
    Melhore o desafio 61, perguntando para o usuário
    se ele quer mostrar mais alguns termos. O programa
    encerra quando ele disser que quer mostrar os termos.

*/

let primeiroTermo = 0
let razao = 5


let i = 0
while (i < 10) {
    console.log(primeiroTermo)
    primeiroTermo = primeiroTermo + razao
    i++
}
console.log("Acabou!")

//Caso queira termos adicionais definir numero em qtdTermosAdicionais

let j = 0
let qtdTermosAdicionais = 10
while (j < qtdTermosAdicionais) {
    console.log(primeiroTermo)
    primeiroTermo = primeiroTermo + razao
    j++
}

console.log("Acabou!")