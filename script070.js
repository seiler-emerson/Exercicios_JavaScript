/*
    Faça um programa que leia o nome e o preço de vários produtos.
    No final mostre:
    * Total gasto na compra.
    * Quantos produtos custam mais de R$1000,00.
    * Qual o nome do produto mais barato.

*/


let compras = [
    {
    produto: "Lapiseira",
    preco: 60
    },
    {
    produto: "Caderno",
    preco: 25
    },
    {
    produto: "Computador",
    preco: 10
    },
    {
    produto: "Impressora",
    preco: 700
    },
]


// * Quantas pessoas tem mais de 18 anos.

let totalCompra = 0

for (let i = 0; i < compras.length; i++) {
    totalCompra = totalCompra + compras[i].preco
}

console.log(`O total da compra foi R$${totalCompra.toFixed(2)}`)


let produtoMaisDeMil = 0

for (let i = 0; i < compras.length; i++) {
    if (compras[i].preco > 1000) {
        produtoMaisDeMil = produtoMaisDeMil + 1
    }
}

console.log(`Temos ${produtoMaisDeMil} custando mais de R$1000.00`)


let precoProdutoMaisBarato = compras[0].preco
let produtoMaisBarato = compras[0].produto

for (let i = 1; i < compras.length; i++) {
    if (precoProdutoMaisBarato > compras[i].preco) {
        produtoMaisBarato = compras[i].produto
        precoProdutoMaisBarato = compras[i].preco
    }
}

console.log(`O produto mais barato foi ${produtoMaisBarato} que custou R$${precoProdutoMaisBarato}`)