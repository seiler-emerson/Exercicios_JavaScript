/*
    Escreva um programa para aprovar o empréstimo bancário para a
    compra de uma casa. Pergunte o valor da casa, o salário do comprador
    e em quantos anos ele vai pagar.
    A prestação mensal não pode exceder 30% do salário ou então o empréstimo
    será negado.

*/

let valorCasa = 80000
let salarioMensal = 10000
let anosPagamento = 7

let mesesPagamento = anosPagamento * 12

let parcela = valorCasa / mesesPagamento

if (parcela > (salarioMensal * 0.3)) {
    console.log(`Para pagar uma casa de R$${valorCasa} em ${anosPagamento} anos a pretação será de R$${parcela.toFixed(2)}.`)
    console.log("Empréstimo NEGADO!")
} else {
    console.log(`Para pagar uma casa de R$${valorCasa} em ${anosPagamento} anos a pretação será de R$${parcela.toFixed(2)}.`)
    console.log("Empréstimo APROVADO!")
}