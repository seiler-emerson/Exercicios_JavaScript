/*
    Elabore um programa que calcule o valor a ser pago em um produto,
    considerando o seu preço normal e condição de pagamento::
    * à vista dinheiro/cheque: 10% de desconto
    * à vista no cartão: 5% de desconto
    * em até 2x no cartão: preço normal
    * 3x ou mais no cartão: 20% de juros

*/

let precoNormal = 1500

let aVistaDinheiro = false
let aVistaCartao = false
let pacelado2X = false
let parcelado3X = true

let aVistaDin = precoNormal * 0.9
let aVistaCart = precoNormal * 0.95
let pac2X = precoNormal
let parcelado = precoNormal * 1.2



if (aVistaDinheiro === true) {
    console.log(`Sua compra de R$${precoNormal.toFixed(2)} vai custar R$${aVistaDin.toFixed(2)} no final`)
} else if (aVistaCartao === true) {
    console.log(`Sua compra de R$${precoNormal.toFixed(2)} vai custar R$${aVistaCart.toFixed(2)} no final`)
} else if (pacelado2X === true) {
    console.log(`Sua compra de R$${precoNormal.toFixed(2)} vai custar R$${pac2X.toFixed(2)} no final`)
} else if (parcelado3X === true) {
    console.log(`Sua compra de R$${precoNormal.toFixed(2)} vai custar R$${parcelado.toFixed(2)} no final`)
}