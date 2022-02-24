/*
    Crie um programa que armazene o nome e peso de 5 pessoas, depois mostre:
    * Quantas pessoas foram cadastradas
    * Uma listagem com a/as pessoas mais pesadas
    * Uma listagem com a/as pessoas mais leves

*/

let pessoas = [
    {
        nome: 'Ana',
        peso: 75.5
    },
    {
        nome: 'Pedro',
        peso: 89
    },
    {
        nome: 'Joana',
        peso: 89
    },
    {
        nome: 'Carolina',
        peso: 55
    },
    {
        nome: 'Bianca',
        peso: 55
    }
]

//PESSOA(S) COM MENOR PESO

let pessoaMenorPeso = [pessoas[0].nome]
let menorPeso = pessoas[0].peso

for (let i = 1; i < pessoas.length; i++) {
    if(pessoas[i].peso < menorPeso) {
        pessoaMenorPeso.splice(0,pessoaMenorPeso.length)
        menorPeso = pessoas[i].peso
        pessoaMenorPeso.push(pessoas[i].nome)
    } else if (pessoas[i].peso === menorPeso) {
        menorPeso = pessoas[i].peso
        pessoaMenorPeso.push(pessoas[i].nome)
    }

}

//PESSOA(S) COM MAIOR PESO

let pessoaMaiorPeso = [pessoas[0].nome]
let maiorPeso = pessoas[0].peso

for (let i = 1; i < pessoas.length; i++) {
    if(pessoas[i].peso > maiorPeso) {
        pessoaMaiorPeso.splice(0,pessoaMaiorPeso.length)
        maiorPeso = pessoas[i].peso
        pessoaMaiorPeso.push(pessoas[i].nome)
    } else if (pessoas[i].peso === maiorPeso) {
        maiorPeso = pessoas[i].peso
        pessoaMaiorPeso.push(pessoas[i].nome)
    }
}

console.log(`Ao todo foram cadastradas ${pessoas.length} pessoas.`)
console.log(`O maior peso foi de ${maiorPeso}kg. Peso de ${pessoaMaiorPeso}.`)
console.log(`O menor peso foi de ${menorPeso}kg. Peso de ${pessoaMenorPeso}.`)
