/*
    Crie um programa que leia o nome, idade e sexo
    de 4 pessoas. No final do programa, mostre:
    * A média de idade do grupo.
    * Qual o nome do homem mais velho.
    * Quantas mulheres tem menos de 20 anos.

*/

let pessoas = [
    {
    nome: "João",
    idade: 22,
    Sexo: "M"
    },
    {
    nome: "Maria",
    idade: 12,
    Sexo: "F"
    },
    {
    nome: "Claudio",
    idade: 75,
    Sexo: "M"
    },
    {
    nome: "Ana",
    idade: 9,
    Sexo: "F"
    },
]

// * A média de idade do grupo.

let somaIdade = 0

for(let i = 0; i < pessoas.length; i++) {
    somaIdade = somaIdade + pessoas[i].idade
}

let mediaIdade = somaIdade / pessoas.length
console.log(`A média de idade do grupo é  de ${mediaIdade} anos.`)

// * Qual o nome do homem mais velho.

let nomeMaisVelho
let idadeMaisVelho = 0

for(let i = 0; i < pessoas.length; i++) {
    if(pessoas[i].idade > idadeMaisVelho && pessoas[i].Sexo === "M") {
        nomeMaisVelho = pessoas[i].nome
        idadeMaisVelho = pessoas[i].idade
    }
}

console.log(`O homem mais velho tem ${idadeMaisVelho} anos e se chama ${nomeMaisVelho}`)


// * Quantas mulheres tem menos de 20 anos.

let qtdMulheresMenores20 = 0

for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade < 20 && pessoas[i].Sexo === "F") {
        qtdMulheresMenores20 = qtdMulheresMenores20 +1
    }
}

console.log(`Ao todo são ${qtdMulheresMenores20} mulheres com menos de 20 anos.`)