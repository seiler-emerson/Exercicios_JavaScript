/*
    Escreva um programa que leia o ano de nascimento de um jovem e informe,
    de acordo com sua idade, se ele ainda vai se ele AINDA VAI SE ALISTAR ao
    serviço militar, se é a HORA DE SE ALISTAR ou se já PASSOU DO TEMPO do alistamento.
    Seu programa também deverá mostrar o tempo que falta ou que passou do prazo.

*/

let anoNascimento = 2004
let anoAtual = 2022
let idade = anoAtual - anoNascimento
let faltaAlistar = 18 - idade
let anoAlistamento = anoAtual + faltaAlistar

if (idade < 18) {
    console.log(`Quem nasceu em ${anoNascimento} tem ${idade} anos em ${anoAtual}.`)
    console.log(`Ainda faltam ${faltaAlistar} anos para o alistamento.`)
    console.log(`Seu alistamento será em ${anoAlistamento}`)
} else if (idade > 18) {
    console.log(`Quem nasceu em ${anoNascimento} tem ${idade} anos em ${anoAtual}.`)
    console.log(`Você deveria ter se alistado há ${Math.abs(faltaAlistar)} anos.`)
    console.log(`Seu alistamento foi em ${anoAlistamento}`)
} else if (idade === 18) {
    console.log(`Quem nasceu em ${anoNascimento} tem ${idade} anos em ${anoAtual}.`)
    console.log(`Você tem que se alistar IMEDIATAMENTE!`)
}