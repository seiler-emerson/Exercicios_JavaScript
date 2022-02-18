/*
    A confederação Nacional de Natação precisa de um programa que
    leia o ano de nascimento de um atleta e mostre sua categoria, de
    acordo com a idade:
    * Até 9 anos: MIRIM
    * Até 14 anos: INFANTIL
    * Até 19 anos: JUNIOR
    * Até 25 anos: SÊNIOR
    * Acima: MASTER

*/

let anoNascimento = 1995
let anoAtual = 2022
let idade = anoAtual - anoNascimento

if (idade <= 9) {
    console.log(`O atleta tem ${idade} anos.`)
    console.log(`Classificação: MIRIM.`)
} else if (idade <= 14) {
    console.log(`O atleta tem ${idade} anos.`)
    console.log(`Classificação: INFANTIL.`)
} else if (idade <= 19) {
    console.log(`O atleta tem ${idade} anos.`)
    console.log(`Classificação: JUNIOR.`)
} else if (idade <= 25) {
    console.log(`O atleta tem ${idade} anos.`)
    console.log(`Classificação: SÊNIOR.`)
} else if (idade > 25) {
    console.log(`O atleta tem ${idade} anos.`)
    console.log(`Classificação: MASTER.`)
}