/*
    Melhore o desafio 061, possibilitando que o usuário mostre
    mais alguns termos. E ao final mostre quantos termos foram
    exibidos.

*/

let primeiroTermo = 0
let razao = 5
count = 0

let i = 0
while (i < 10) {
    console.log(primeiroTermo)
    primeiroTermo = primeiroTermo + razao
    i++
    count += 1
}
console.log("Pausa!")

//Caso queira termos adicionais definir numero em qtdTermosAdicionais

let j = 0
let qtdTermosAdicionais = 10
while (j < qtdTermosAdicionais) {
    console.log(primeiroTermo)
    primeiroTermo = primeiroTermo + razao
    j++
    count += 1
}

console.log("Acabou!")

console.log(`A progressão foi finalizada com ${count} termos mostrados.`)