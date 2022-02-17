let precoProduto = 123.95

let desconto = 5

let precoDesconto = precoProduto - (precoProduto * (desconto/100))

console.log(`O produto que custava R$${precoProduto}, na promoção com desconto de ${desconto}% vai custar R$${precoDesconto.toFixed(2)}.`)
