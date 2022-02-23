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

let pessoaMenorPeso = []
let menorPeso = pessoas[0].peso

for (let i = 0; i < pessoas.length; i++) {
    if(pessoas[i].peso <= menorPeso) {
        menorPeso = pessoas[i].peso
        pessoaMenorPeso.pop()
        pessoaMenorPeso.push(pessoas[i].nome)
    }

}
console.log(pessoaMenorPeso)
console.log(menorPeso)

console.log("")
console.log("")
console.log("")
console.log(`Ao todo foram cadastradas ${pessoas.length} pessoas.`)
console.log(`O maior peso foi de ${pessoas.length}kg. Peso de XXX XXX.`)
console.log(`O menor peso foi de ${pessoas.length}kg. Peso de XXX XXX.`)
