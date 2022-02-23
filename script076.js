/*
    Crie um programa que tenha um array único com nomes de
    produtos e seus respectivos preços, na sequência.
    No final, mostre uma listagem de preços, organizando os dados
    em forma tabular.

*/

let array = [
    {
        produto: "Lapis",
        preco: 1.75
    },
    {
        produto: "Borracha",
        preco: 2
    },
    {
        produto: "Caderno",
        preco: 15.9
    },
    {
        produto: "Estojo",
        preco: 25
    },
    {
        produto: "Transferidor",
        preco: 4.20
    },
    {
        produto: "Compasso",
        preco: 9.99
    },
    {
        produto: "Mochila",
        preco: 120.32
    },
    {
        produto: "Canetas",
        preco: 22.30
    },
    {
        produto: "Livro",
        preco: 34.90
    },
]

for(let i = 0; i < array.length; i++) {
    console.log(`${array[i].produto}${".".repeat(35-(array[i].produto.length))}R$${" ".repeat(4-(array[i].preco.toFixed(0).length))}${array[i].preco.toFixed(2)}`)
}